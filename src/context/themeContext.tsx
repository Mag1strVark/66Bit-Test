import { createContext, useState } from 'react'
import { appAPI } from '../services/AppService.ts'
import { ITheme } from '../models/ITheme.ts'
import { getItem, setItem } from '../utils/storage.ts'

export const ThemeContext = createContext<{
  theme: ITheme | undefined
  changeTheme: (newTheme: string) => void
} | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeStorage = getItem('theme') ? getItem('theme') : 'light'
  const [name, setName] = useState<string>(themeStorage)
  const { data: theme } = appAPI.useGetThemeQuery(name)

  const changeTheme = (newTheme: string) => {
    setName(newTheme)
    setItem('theme', newTheme)
  }

  const themeContextValue = { theme, changeTheme }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
