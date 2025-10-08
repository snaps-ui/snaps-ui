'use client'

import { Button } from '@snaps-ui/react/button'
import { Box } from '@snaps-ui/react/box'
import { Flex } from '@snaps-ui/react/flex'
import { Field } from '@snaps-ui/react/field'
import { Paper } from '@snaps-ui/react/paper'
import { Stack } from '@snaps-ui/react/stack'
import { Typography } from '@snaps-ui/react/typography'
import { FaGithub, FaGoogle } from 'react-icons/fa6'

export const AuthenticationExample = () => {
  return (
    <Flex width={'full'} height={'100vh'}>
      <Box width={'50%'} bg={'accent.subtle'} padding={'10px'}>
        <Typography variant={'h5'}>Snaps UI</Typography>
      </Box>

      <Box
        width={'50%'}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Box width={'60%'}>
          <Paper width={'full'}>
            <Stack gap={2} mb={'15px'} textAlign={'center'}>
              <Typography variant={'subtitle1'}>Create an account</Typography>
              <Typography variant={'subtitle2'}>
                Enter your details below to create your account
              </Typography>
            </Stack>

            <Stack gap={5}>
              <Field.Root>
                <Field.Label>
                  Email <Field.RequiredIndicator />
                </Field.Label>
                <Field.Input
                  placeholder="mail@example.com"
                  variant={'subtle'}
                  _focus={{ borderColor: 'accent.default' }}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Password</Field.Label>
                <Field.Input
                  placeholder="*********"
                  variant={'subtle'}
                  _focus={{ borderColor: 'accent.default' }}
                />
              </Field.Root>

              <Stack gap={3}>
                <Button bg={'accent.default'}>Sign up with Email </Button>

                <Typography
                  variant={'subtitle1'}
                  textStyle={'sm'}
                  textAlign={'center'}
                >
                  Or continue with
                </Typography>

                <Stack gap={3}>
                  <Button variant={'outline'}>
                    <FaGoogle /> Google
                  </Button>
                  <Button variant={'outline'}>
                    <FaGithub /> Github
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </Paper>
        </Box>
      </Box>
    </Flex>
  )
}
