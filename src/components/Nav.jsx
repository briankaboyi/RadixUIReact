import { Button, Flex, Text } from '@radix-ui/themes'
import React from 'react'

export default function Nav() {
  return (
    <Flex className='nav' justify="between" align={'center'}>
      <Text className="logo">Urban</Text>
      <Flex className="nav-bar" gap="5">
        <Text size="1" weight="bold" className="nav-item active">Home</Text>
        <Text size="1" weight="bold" className="nav-item b-faded">Services</Text>
        <Text size="1" weight="bold" className="nav-item b-faded">Property</Text>
        <Text size="1" weight="bold" className="nav-item b-faded">Contact</Text>
      </Flex>
      <Flex gap="5">
        <Button size="2" variant='outline'>Login</Button>
        <Button size="2" variant="solid">Sign Up</Button>
      </Flex>
    </Flex>
  )
}
