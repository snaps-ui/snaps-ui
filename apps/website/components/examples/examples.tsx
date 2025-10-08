'use client'

import { Button } from '@snaps-ui/react/button'
import { Box } from '@snaps-ui/react/box'
import { Center } from '@snaps-ui/react/center'
import { Flex } from '@snaps-ui/react/flex'
import { Field } from '@snaps-ui/react/field'
import { Paper } from '@snaps-ui/react/paper'
import { HStack, Stack } from '@snaps-ui/react/stack'
import { Typography } from '@snaps-ui/react/typography'
import { Tabs } from '@snaps-ui/react/tabs'
import { FaPlus } from 'react-icons/fa6'
import { Avatar, AvatarGroup } from '@snaps-ui/react'

export const BillingAddress = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Stack gap={2} mb={'15px'}>
        <Typography variant={'subtitle1'}>Billing Address</Typography>
        <Typography variant={'subtitle2'}>
          The billing address associated with your payment method
        </Typography>
      </Stack>

      <Stack gap={5}>
        <Field.Root>
          <Field.Label>Message</Field.Label>
          <Field.Textarea
            placeholder="Add any additional message"
            variant={'subtle'}
            _focus={{ borderColor: 'accent.default' }}
            rows={4}
          />
        </Field.Root>

        <HStack gap={3}>
          <Button bg={'accent.default'} ripple>
            Submit
          </Button>
          <Button
            variant={'outline'}
            borderColor={'accent.default'}
            _hover={{ bg: 'accent.default' }}
            ripple
          >
            Cancel
          </Button>
        </HStack>
      </Stack>
    </Paper>
  )
}

export const PaymentMethod = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Stack gap={2} mb={'15px'}>
        <Typography variant={'subtitle1'}>Payment Method</Typography>
        <Typography variant={'subtitle2'}>
          All transactions are secure and encrypted
        </Typography>
      </Stack>

      <Stack gap={5}>
        <Field.Root>
          <Field.Label>Name</Field.Label>
          <Field.Input
            placeholder="John Doe"
            variant={'subtle'}
            _focus={{ borderColor: 'accent.default' }}
          />
        </Field.Root>

        <Flex gap={3}>
          <Box width={'70%'}>
            <Field.Root invalid required>
              <Field.Label>
                Card Number <Field.RequiredIndicator />
              </Field.Label>
              <Field.Input
                placeholder="1234 45675 45332 3445"
                variant={'subtle'}
                _focus={{ borderColor: 'accent.default' }}
              />
              <Field.Error>The card number is required</Field.Error>
            </Field.Root>
          </Box>

          <Box width={'30%'}>
            <Field.Root>
              <Field.Label>CVV</Field.Label>
              <Field.Input
                placeholder="John Doe"
                variant={'subtle'}
                _focus={{ borderColor: 'accent.default' }}
              />
            </Field.Root>
          </Box>
        </Flex>
      </Stack>
    </Paper>
  )
}

export const TeamMembers = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Center>
        <Stack gap={4} mb={'15px'} textAlign={'center'}>
          <AvatarGroup justifyContent={'center'} gap="0" spaceX="-2">
            <Avatar.Root>
              <Avatar.Fallback name="Uchiha Sasuke" />
              <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd" />
            </Avatar.Root>

            <Avatar.Root>
              <Avatar.Fallback name="Baki Ani" />
              <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c" />
            </Avatar.Root>

            <Avatar.Root>
              <Avatar.Fallback name="Uchiha Chan" />
              <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863" />
            </Avatar.Root>
            <Avatar.Root>
              <Avatar.Fallback>+8</Avatar.Fallback>
            </Avatar.Root>
          </AvatarGroup>
          <Typography variant={'subtitle1'}>No Team Members</Typography>
          <Typography variant={'subtitle2'}>
            Invite your team to collaborate on this project.
          </Typography>

          <Button bg={'accent.default'}>
            <FaPlus /> Invite Member
          </Button>
        </Stack>
      </Center>
    </Paper>
  )
}

export const TabsExample = () => {
  return (
    <Paper width={'full'} height="min-content">
      <Stack mb={'15px'}>
        <Typography variant={'subtitle1'}>Tabs</Typography>
      </Stack>

      <Tabs.Root variant="outline" defaultValue="snaps">
        <Tabs.List>
          <Tabs.Trigger value="snaps">snaps</Tabs.Trigger>
          <Tabs.Trigger value="dashboard">Dashboard</Tabs.Trigger>
          <Tabs.Trigger value="authentication">Authentication</Tabs.Trigger>
        </Tabs.List>

        <Tabs.Content value="snaps" width="full" p="3">
          <Typography>
            Snaps UI is a modern UI library with reusable, intuitive components
            that help you ship products faster. Create beautiful, consistent
            interfaces with customizable, production-ready building blocks.
          </Typography>
        </Tabs.Content>

        <Tabs.Content value="dashboard" p="3">
          <Typography>Coming soon — a visual dashboard overview.</Typography>
        </Tabs.Content>

        <Tabs.Content value="authentication" p="3">
          <Typography>
            Manage user sign-in and security settings here.
          </Typography>
        </Tabs.Content>
      </Tabs.Root>
    </Paper>
  )
}
