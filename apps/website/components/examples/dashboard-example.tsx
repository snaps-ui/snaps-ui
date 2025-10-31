import { Avatar } from '@snaps-ui/react/avatar'
import { Badge } from '@snaps-ui/react/badge'
import { Box } from '@snaps-ui/react/box'
import { Card } from '@snaps-ui/react/card'
import { Flex } from '@snaps-ui/react/flex'
import { Grid, GridItem } from '@snaps-ui/react/grid'
import { IconButton } from '@snaps-ui/react/icon-button'
import { Input } from '@snaps-ui/react/input'
import { InputGroup } from '@snaps-ui/react/input-group'
import { Persona } from '@snaps-ui/react/persona'
import { Table } from '@snaps-ui/react/table'
import { Typography } from '@snaps-ui/react/typography'
import { VStack } from '@snaps-ui/react/stack'

import { BiSearch } from 'react-icons/bi'
import { FaArrowTrendUp } from 'react-icons/fa6'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'

import {
  asideItems,
  exampleDashboardData,
  exampleUsersData,
} from '~/constant/example-contants'

export const DashboardExample = () => {
  return (
    <Box
      height={'auto'}
      display={'flex'}
      borderRadius={'12px'}
      overflow={'hidden'}
      borderWidth={'1px'}
      borderColor={'bg.emphasized'}
    >
      <Box
        width={'20%'}
        bg={'bg.emphasized'}
        height={'100vh'}
        display={{ base: 'none', md: 'block' }}
      >
        <DashboardSideBar />
      </Box>

      <Box width={{ base: '100%', md: '80%' }}>
        <DashboardNavBar />

        <DashboardMain />
      </Box>
    </Box>
  )
}

export const DashboardSideBar = () => {
  return (
    <Box position={'relative'} height={'100vh'}>
      <Box padding={'10px'} borderBottom={'0.6px solid white'}>
        <Typography fontWeight={'bold'} variant={'h5'}>
          Snaps Inc.
        </Typography>
      </Box>

      <Box mt={'15px'}>
        {asideItems.map((nav) => (
          <Typography
            padding={'12px'}
            _hover={{ bg: 'bg.subtle' }}
            cursor={'pointer'}
            key={nav.label}
            display={'flex'}
            alignItems={'center'}
            gap={'2'}
          >
            <nav.icon /> {nav.label}
          </Typography>
        ))}
      </Box>

      <Box position={'absolute'} bottom={'0px'} padding={'10px'}>
        <Persona
          name="Justice Chimobi"
          title="Creator Snaps UI"
          img={'https://avatars.githubusercontent.com/u/74328318?v=4'}
          imgSize="sm"
        />
      </Box>
    </Box>
  )
}

export const DashboardNavBar = () => {
  return (
    <Flex padding={'10px'}>
      <Box width={'80%'}>
        <InputGroup startAddon={<BiSearch />}>
          <Input placeholder="search dashboard..." />
        </InputGroup>
      </Box>

      <Box width={'20%'}>
        <Flex justifyContent={'flex-end'} alignItems={'center'} gap={'4px'}>
          <Avatar.Root size={'lg'}>
            <Avatar.Fallback name="Justice Chimobi" />
            <Avatar.Image
              src={'https://avatars.githubusercontent.com/u/74328318?v=4'}
            />
          </Avatar.Root>
        </Flex>
      </Box>
    </Flex>
  )
}

export const DashboardMain = () => {
  return (
    <Box padding={'10px'}>
      <Grid
        mx="auto"
        gridTemplateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
        gap={{ base: '2', md: '1.5' }}
      >
        {exampleDashboardData.map((data) => (
          <GridItem key={data.id}>
            <Card.Root>
              <Card.Body>
                <Flex
                  justifyContent={'space-between'}
                  alignItems={'flex-start'}
                >
                  <VStack gap={'2'}>
                    <Typography variant={'subtitle2'}>{data.name}</Typography>
                    <Typography variant={'body2'}>₦{data.numbers}</Typography>
                  </VStack>

                  <Box>
                    <FaArrowTrendUp />
                  </Box>
                </Flex>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>

      <Box mt={'25px'}>
        <Table.ScrollArea>
          <Table.Root hoverable size={'sm'}>
            <Table.Header>
              <Table.Row>
                <Table.HeadCell>Users</Table.HeadCell>
                <Table.HeadCell minWidth="200px">Revenue</Table.HeadCell>
                <Table.HeadCell minWidth="200px">Status</Table.HeadCell>
                <Table.HeadCell minWidth="200px">Visits</Table.HeadCell>
                <Table.HeadCell></Table.HeadCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {exampleUsersData.map((d) => (
                <Table.Row key={d.id}>
                  <Table.Cell>
                    <Persona
                      name={d.user.name}
                      title={d.user.email}
                      img={d.user.avatar}
                      imgSize="xs"
                    />
                  </Table.Cell>
                  <Table.Cell minWidth="200px">{d.revenue}</Table.Cell>
                  <Table.Cell>
                    <Badge colorPalette={d.status === 'Done' ? 'green' : ''}>
                      {d.status}
                    </Badge>
                  </Table.Cell>
                  <Table.Cell minWidth="200px">{d.id}</Table.Cell>
                  <Table.Cell>
                    <IconButton variant={'ghost'} size={'sm'}>
                      <HiOutlineDotsHorizontal />
                    </IconButton>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </Table.ScrollArea>
      </Box>
    </Box>
  )
}
