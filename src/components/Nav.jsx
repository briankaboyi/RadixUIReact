import { Button, Flex } from '@radix-ui/themes'
import React from 'react'

export default function Nav() {
  return (
    <Flex className='nav' justify="between" align={'center'}>
      <p className="logo">Urban</p>
      <Flex className="nav-bar" gap="5">
        <p className="nav-item active">Home</p>
        <p className="nav-item">Services</p>
        <p className="nav-item">Property</p>
        <p className="nav-item">Contact</p>
      </Flex>
      <Flex gap="5">
        <Button size="2" variant='outline'>Login</Button>
        <Button size="2" variant="solid">Sign Up</Button>
      </Flex>
    </Flex>
  )
}
