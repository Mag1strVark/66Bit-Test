import AppRouter from './router/AppRouter.tsx'
import s from './App.module.scss'
import Header from './layout/header/Header.tsx'
import Navbar from './layout/navbar/Navbar.tsx'
import { ThemeContext } from './context/themeContext.tsx'
import { useContext } from 'react'

const App = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
      className={s.container}
      style={{
        backgroundColor: theme?.theme?.secondColor,
        color: theme?.theme?.textColor,
      }}
    >
      <Header />
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
