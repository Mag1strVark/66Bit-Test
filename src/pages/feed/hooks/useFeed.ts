import { useEffect, useState } from 'react'
import { appAPI } from '../../../services/AppService.ts'

const UseFeed = () => {
  const [count, setCount] = useState<number>(10)
  const { data: posts, isLoading, refetch } = appAPI.useGetAllFeedsQuery(count)
  const [startY, setStartY] = useState(0)
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleScroll = () => {
    const scrollPosition = window.innerHeight + window.scrollY
    const documentHeight = document.documentElement.scrollHeight
    const scrollThreshold = 0.8

    if (
      scrollPosition >= documentHeight * scrollThreshold &&
      !isLoading &&
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
  }, [posts, isLoading])

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

  return {
    posts,
    isLoading,
    isRefreshing,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  }
}

export default UseFeed
