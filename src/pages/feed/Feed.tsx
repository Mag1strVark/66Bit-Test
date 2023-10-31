import s from './Feed.module.scss'
import { appAPI } from '../../services/AppService.ts'
import FeedContainer from '../../components/FeedContainer/FeedContainer.tsx'

const Feed = () => {
  const { data: feeds } = appAPI.useGetAllFeedsQuery(5)

  return (
    <div className={s.container}>
      {feeds && feeds.map((feed) => <FeedContainer feed={feed} />)}
    </div>
  )
}

export default Feed
