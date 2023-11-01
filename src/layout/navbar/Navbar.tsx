import { NavLink } from 'react-router-dom'
import { FEED_ROUTE, THEME_ROUTE } from '../../utils/constsRoutes.ts'
import s from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={s.container}>
      <NavLink to={FEED_ROUTE}>Новости</NavLink>
      <NavLink to={THEME_ROUTE}>Настройки</NavLink>
    </div>
  )
}

export default Navbar
