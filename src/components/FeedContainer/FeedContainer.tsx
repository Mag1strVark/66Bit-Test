import s from './FeedContainer.module.scss'
import * as React from 'react'
import { IFeed } from '../../models/IFeed.ts'

interface ItemsProps {
  feed: IFeed
}

const FeedContainer: React.FC<ItemsProps> = ({ feed }) => {
  return (
    <div key={feed.id} className={s.container}>
      <h1>{feed.title}</h1>
      <p>{feed.content}</p>
    </div>
  )
}

export default FeedContainer
