import s from './Feed.module.scss'
import { appAPI } from '../../services/AppService.ts'
import FeedContainer from '../../components/FeedContainer/FeedContainer.tsx'
import { useState } from 'react'

const Feed = () => {
  const [page, setPage] = useState<number>(1)
  const [count, setCount] = useState<number>(5)
  const { data: posts, isLoading } = appAPI.useGetAllFeedsQuery({
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

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (!posts) {
    return <div>Нету новостей</div>
  }

  return (
    <div className={s.container}>
      {posts && posts.map((feed) => <FeedContainer feed={feed} />)}
      <button onClick={prevPage}>-</button>
      <button onClick={() => nextPage()}>+</button>
      <button onClick={() => setCount((prevState) => prevState + 10)}>
        Больше новостей
      </button>
    </div>
  )
}

export default Feed
