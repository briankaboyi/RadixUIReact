import { Button, Flex, Text } from '@radix-ui/themes'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const active = {color:"#333",opacity:"1"};
  const inactive ={color:   "#a3a2a2"
  };

  const handleClick = (e) => {
    const parent = e.target.parentElement.children;
    const element = e.target;

    for (let c of parent) {

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
        <NavLink to="/"><Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + active}>Home</Text></NavLink>
        <NavLink to="property"> <Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + inactive}>Property</Text></NavLink>
        <NavLink to="contacts">  <Text size="1" weight="bold" onClick={handleClick} className={"nav-item " + inactive}>Contact</Text></NavLink>
        
        
       
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
