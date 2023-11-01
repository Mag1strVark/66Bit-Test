import s from './Header.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext.tsx'

const Header = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={s.container}
      style={{
        backgroundColor: theme?.theme.mainColor,
      }}
    >
      <h1>Новости</h1>
    </div>
  )
}

export default Header
