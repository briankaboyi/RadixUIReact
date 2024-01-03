import { Button, Flex, Text } from '@radix-ui/themes'
import React, { useState } from 'react'

export default function Nav() {
  const active = "active";
  const inactive = "b-faded";

  const handleClick = (e) => {
    const parent = e.target.parentElement.children;
    const element = e.target;

    for (let c of parent) {
      // c.classList.add(inactive);

      if (c.classList.contains(active)) {
        c.classList.remove(active)
        c.classList.add(inactive)
      }
    }
    element.classList.remove(inactive)

    element.classList.add(active)
  }
  return (
    <Flex className="nav" justify="between" align={"center"}>
      <Text className="logo">Urban</Text>
      <Flex className="nav-bar" gap="5">
        <Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + active}>Home</Text>
        <Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + inactive}>Services</Text>
        <Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + inactive}>Property</Text>
        <Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + inactive}>Contact</Text>
      </Flex>
      <Flex gap="5">
        <Button size="2" variant="outline">
          Login
        </Button>
        <Button size="2" variant="solid">
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
}
