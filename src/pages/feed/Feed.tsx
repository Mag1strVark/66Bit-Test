import s from './Feed.module.scss'
import { appAPI } from '../../services/AppService.ts'
import FeedContainer from '../../components/FeedContainer/FeedContainer.tsx'
import { useState } from 'react'
import PullToRefresh from 'react-pull-to-refresh'

const Feed = () => {
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(5)
  const {
    data: posts,
    isLoading,
    refetch,
  } = appAPI.useGetAllFeedsQuery({
    page: page,
    count: count,
  })

  const nextPage = () => {
    setPage(page + 1)
    setCount(5)
  }

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1)
      setCount(5)
    }
  }

  const handleRefresh = async () => {
    await refetch()
  }
  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (!posts) {
    return <div>Нету новостей</div>
  }

  return (
    <div className={s.container}>
      <PullToRefresh onRefresh={handleRefresh}>
        {posts && posts.map((feed) => <FeedContainer feed={feed} />)}
        <button onClick={prevPage}>предыдущая</button>
        <button onClick={() => nextPage()}>следующая</button>
        <button onClick={() => setCount((prevState) => prevState + 10)}>
          Больше новостей
        </button>
      </PullToRefresh>
    </div>
  )
}

export default Feed
