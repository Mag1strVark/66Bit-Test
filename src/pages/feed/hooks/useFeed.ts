import { useEffect, useState } from 'react'
import { appAPI } from '../../../services/AppService.ts'
import { IFeed } from '../../../models/IFeed.ts'
import { getItem, setItem } from '../../../utils/storage.ts'

const UseFeed = () => {
  const [count, setCount] = useState<number>(10)
  const [posts, setPosts] = useState<IFeed[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const {
    data: fetchedPosts,
    isLoading: isFetching,
    refetch,
  } = appAPI.useGetAllFeedsQuery(count)
  const [startY, setStartY] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)

  // Offline
  // useEffect(() => {
  //   const savedPosts = getItem('posts')
  //
  //   if (savedPosts) {
  //     setPosts(savedPosts)
  //     setIsLoading(false)
  //   } else {
  //     setPosts(null)
  //     setIsLoading(true)
  //   }
  // }, [])

  useEffect(() => {
    setPosts(fetchedPosts)
  }, [])

  // Пагинация
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY
    const documentHeight = document.documentElement.scrollHeight
    const scrollThreshold = 0.8

    if (
      scrollPosition >= documentHeight * scrollThreshold &&
      !isFetching &&
      posts
    ) {
      setCount((prevState) => prevState + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [posts, isFetching])

  // pull to refresh
  const handleTouchStart = (e: any) => {
    setStartY(e.touches[0].clientY)
  }

  const handleTouchMove = (e: any) => {
    const currentY = e.touches[0].clientY
    const diffY = currentY - startY
    const scrollThreshold = 100

    if (diffY > scrollThreshold && !isLoading && !isRefreshing) {
      setIsRefreshing(true)
    }
  }

  const handleTouchEnd = (e: any) => {
    const diffY = e.changedTouches[0].clientY - startY
    if (diffY > 100 && !isLoading && isRefreshing) {
      setCount(10)
      refetch()
    }
    setStartY(0)
    setIsRefreshing(false)
  }

  useEffect(() => {
    if (!isRefreshing) {
      setStartY(0)
    }
  }, [isRefreshing])

  // refresh
  const onRefresh = async () => {
    setCount(10)
    setIsRefreshing(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    window.scrollTo({ top: 0 })
    await refetch()
    setIsRefreshing(false)
  }

  return {
    posts,
    isLoading,
    isRefreshing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    onRefresh,
  }
}

export default UseFeed
