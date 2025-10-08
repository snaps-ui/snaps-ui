'use client'

import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Tabs } from '@snaps-ui/react/tabs'

import {
  TeamMembers,
  PaymentMethod,
  BillingAddress,
  TabsExample,
} from '~/components/examples/examples'
import { AuthenticationExample } from '~/components/examples/authentication'

export const ExampleSection = () => {
  return (
    <Box minH="auto" width={'90%'} mx={'auto'}>
      <Tabs.Root variant="underline" defaultValue="examples">
        <Tabs.List>
          <Tabs.Trigger
            value="examples"
            _selected={{ color: 'accent.default' }}
          >
            Examples
          </Tabs.Trigger>
          <Tabs.Trigger
            value="dashboard"
            _selected={{ color: 'accent.default' }}
          >
            Dashboard
          </Tabs.Trigger>
          <Tabs.Trigger
            value="authentication"
            _selected={{ color: 'accent.default' }}
          >
            Authentication
          </Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="examples" width={'100%'} padding={'10px'}>
          <Flex
            gap={4}
            justifyContent={'space-around'}
            mb={'15px'}
            flexDirection={{ base: 'column', md: 'row' }}
          >
            <BillingAddress />
            <PaymentMethod />
            <TeamMembers />
          </Flex>

          <TabsExample />
        </Tabs.Content>

        <Tabs.Content value="dashboard">Coming soon</Tabs.Content>

        <Tabs.Content value="authentication" width={'100%'}>
          <AuthenticationExample />
        </Tabs.Content>
      </Tabs.Root>
    </Box>
  )
}
