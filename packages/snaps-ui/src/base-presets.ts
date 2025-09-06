import { createSystem, defaultBaseConfig, mergeConfigs } from '@chakra-ui/react'

import { defaultTheme } from '@snaps-ui/system'

const defaultConfig = mergeConfigs(defaultBaseConfig, defaultTheme)

const defaultSystem = createSystem(defaultConfig)

export { defaultConfig, defaultSystem }
