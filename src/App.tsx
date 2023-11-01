import AppRouter from './router/AppRouter.tsx'
import s from './App.module.scss'
import Header from './layout/header/Header.tsx'
import Navbar from './layout/navbar/Navbar.tsx'

const App = () => {
  return (
    <div className={s.container}>
      <Header />
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
