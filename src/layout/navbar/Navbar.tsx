import { NavLink } from 'react-router-dom'
import { FEED_ROUTE, THEME_ROUTE } from '../../utils/constsRoutes.ts'
import s from './Navbar.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext.tsx'

const Navbar = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={s.container}
      style={{
        backgroundColor: theme?.theme?.secondColor,
        color: theme?.theme?.textColor,
        border: `3px solid ${theme?.theme?.mainColor}`,
      }}
    >
      <NavLink
        className={s.navLink}
        style={{
          backgroundColor: theme?.theme?.mainColor,
          color: theme?.theme?.textColor,
        }}
        to={FEED_ROUTE}
      >
        Лента
      </NavLink>
      <NavLink
        className={s.navLink}
        style={{
          backgroundColor: theme?.theme?.mainColor,
          color: theme?.theme?.textColor,
        }}
        to={THEME_ROUTE}
      >
        Темы
      </NavLink>
    </div>
  )
}

export default Navbar
