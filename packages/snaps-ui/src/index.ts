export { defaultSystem, defaultConfig } from './base-presets.ts'

export {
  useMediaQuery,
  useBreakpoint,
  useBreakpointValue,
  useDisclosure,
  useControllableState,
  createContext,
  createListCollection,
  createGridCollection,
  createFileTreeCollection,
  mergeRefs,
} from '@chakra-ui/react'

export type {
  UseDisclosureReturn,
  UseDisclosureProps,
  UseBreakpointOptions,
  UseBreakpointValueOptions,
  UseControllableStateProps,
} from '@chakra-ui/react'

export {
  createRecipeContext,
  createSystem,
  chakra,
  defineAnimationStyles,
  defineConfig,
  defineLayerStyles,
  defineKeyframes,
  useRecipe,
  useSlotRecipe,
  useChakraContext,
  useToken,
  defineTokens,
  defineConditions,
  defineGlobalStyles,
  defineRecipe,
  defineSemanticTokens,
  defineSlotRecipe,
  defineStyle,
  defineTextStyles,
  createSlotRecipeContext,
} from '@chakra-ui/react/styled-system'

export type {
  RecipeProps,
  RecipeDefinition,
  SlotRecipeDefinition,
  HTMLChakraProps,
  SlotRecipeProps,
  SlotRecipeRecord,
  ConditionalValue,
  SystemConfig,
  SystemStyleObject,
} from '@chakra-ui/react/styled-system'

export { SnapsProvider } from './provider/index.ts'
export { type SnapsProviderProps } from './provider/index.ts'

export { Box, type BoxProps } from './components/box/index.ts'
export { Text, type TextProps } from './components/text/index.ts'
