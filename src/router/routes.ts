import { FEED_ROUTE, THEME_ROUTE } from '../utils/constsRoutes.ts'
import Feed from '../pages/feed/Feed.tsx'
import Theme from '../pages/theme/Theme.tsx'

export const routes = [
  {
    path: FEED_ROUTE,
    Component: Feed,
  },
  {
    path: THEME_ROUTE,
    Component: Theme,
  },
]
