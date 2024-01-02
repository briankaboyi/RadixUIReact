import { Flex, Heading, Text } from '@radix-ui/themes'
import React from 'react'
import Buy from './Buy'


export default function Hero() {
  return (
    <Flex className='hero' direction="column" gap="6">
      <Text align="left" size="8">Discover Your Perfect <br /> Property Today</Text>
      <Text as="p" align="left" size="2" className="description">Real estate properties for sale and  <br />rent in over 12+ countries</Text>
      <Buy />

    </Flex>
  )
}
