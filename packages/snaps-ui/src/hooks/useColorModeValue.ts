import { useTheme } from 'next-themes'

export function useColorModeValue<T>(light: T, dark: T) {
  const { theme } = useTheme()
  return theme === 'dark' ? dark : light
}
