import { createSystem, defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'

import { defaultTheme } from './theme/index.ts'

const defaultConfig = mergeConfigs(defaultBaseConfig, defaultTheme)

const defaultSystem = createSystem(defaultConfig)

export { defaultConfig, defaultSystem }
