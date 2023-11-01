import s from './Theme.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext.tsx'

enum ThemeName {
  Dark = 'dark',
  Light = 'light',
  Blue = 'blue',
}

const Theme = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={s.container}>
      <button
        className={s.dark}
        onClick={() => theme?.changeTheme(ThemeName.Dark)}
      >
        Темная тема
      </button>
      <button
        className={s.light}
        onClick={() => theme?.changeTheme(ThemeName.Light)}
      >
        Светлая тема
      </button>
      <button
        className={s.blue}
        onClick={() => theme?.changeTheme(ThemeName.Blue)}
      >
        Голубая тема
      </button>
    </div>
  )
}

export default Theme
