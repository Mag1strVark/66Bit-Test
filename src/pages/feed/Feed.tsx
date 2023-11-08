import s from './Feed.module.scss'
import FeedContainer from '../../components/FeedContainer/FeedContainer.tsx'
import useFeed from './hooks/useFeed.ts'
import Up from '../../assets/Up.svg'
import Reload from '../../assets/Swap.svg'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext.tsx'
import Loading from '../../layout/loading/Loading.tsx'

const Feed = () => {
  const {
    posts,
    isLoading,
    isRefreshing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    onRefresh,
  } = useFeed()

  const theme = useContext(ThemeContext)

  // if (isLoading) {
  //   return <Loading />
  // }
  //
  // if (!posts) {
  //   return <div>Нету новостей</div>
  // }

  return (
    <div
      className={s.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {isRefreshing && (
        <div className={s.refreshIndicator}>
          <Loading />
        </div>
      )}
      <div
        className={s.scrollToTopButton}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          backgroundColor: theme?.theme?.mainColor,
        }}
      >
        <img src={Up} alt="Scroll to top" />
      </div>
      <div
        style={{
          backgroundColor: theme?.theme?.mainColor,
        }}
        className={s.reloadInfo}
        onClick={() => onRefresh()}
      >
        <img src={Reload} alt="Reload info" />
      </div>
      {posts && posts.map((feed) => <FeedContainer feed={feed} />)}
    </div>
  )
}

export default Feed
