import s from './Feed.module.scss'
import FeedContainer from '../../components/FeedContainer/FeedContainer.tsx'
import useFeed from './hooks/useFeed.ts'
import Up from '../../assets/Up.svg'
// import Reload from '../../assets/Swap.svg'

const Feed = () => {
  const {
    posts,
    isLoading,
    isRefreshing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useFeed()

  if (isLoading) {
    return <div>Загрузка...</div>
  }

  if (!posts) {
    return <div>Нету новостей</div>
  }

  return (
    <div
      className={s.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isRefreshing && (
        <div className={s.refreshIndicator}>
          {/*<img src={Reload} alt="Reload" />*/}
          Загрузка...
        </div>
      )}
      <div
        className={s.scrollToTopButton}
        onClick={() => window.scrollTo(0, 0)}
      >
        <img src={Up} alt="Scroll to top" />
      </div>
      {posts && posts.map((feed) => <FeedContainer feed={feed} />)}
    </div>
  )
}

export default Feed
