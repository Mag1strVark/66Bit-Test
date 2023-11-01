import { createContext, useState } from 'react'
import { appAPI } from '../services/AppService.ts'
import { ITheme } from '../models/ITheme.ts'

export const ThemeContext = createContext<{
  theme: ITheme
  changeTheme: (newTheme: string) => void
} | null>(null)

interface ThemeProviderProps {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [name, setName] = useState<string>('dark')
  const { data: theme } = appAPI.useGetThemeQuery(name)

  const changeTheme = (newTheme: string) => {
    setName(newTheme)
  }

  const themeContextValue = { theme, changeTheme }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
