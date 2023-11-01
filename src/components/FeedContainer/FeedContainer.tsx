import s from './FeedContainer.module.scss'
import * as React from 'react'
import { IFeed } from '../../models/IFeed.ts'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext.tsx'

interface ItemsProps {
  feed: IFeed
}

const FeedContainer: React.FC<ItemsProps> = ({ feed }) => {
  const theme = useContext(ThemeContext)
  return (
    <div
      key={feed.id}
      className={s.container}
      style={{
        backgroundColor: theme?.theme?.mainColor,
      }}
    >
      <h1>{feed.title}</h1>
      <p>{feed.content}</p>
    </div>
  )
}

export default FeedContainer
