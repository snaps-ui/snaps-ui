import { createSystem, defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'
import { defaultTheme, utilities } from '@snaps-ui/system'

const defaultConfig = mergeConfigs(defaultBaseConfig, defaultTheme)

defaultConfig.utilities = Object.assign(
  defaultConfig.utilities ?? {},
  utilities
)

const defaultSystem = createSystem(defaultConfig)

export { defaultConfig, defaultSystem }
