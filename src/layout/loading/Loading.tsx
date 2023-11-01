import s from './Loading.module.scss'
import { useContext } from 'react'
import { ThemeContext } from '../../context/themeContext.tsx'

const Loading = () => {
  const theme = useContext(ThemeContext)
  return (
    <div className={s.loadingContainer}>
      <div
        className={s.loadingSpinner}
        style={{
          border: `16px solid ${theme?.theme?.mainColor}`,
          borderTop: `16px solid ${theme?.theme?.secondColor}`,
        }}
      ></div>
      <div className={s.loadingText}>Загрузка...</div>
    </div>
  )
}

export default Loading
