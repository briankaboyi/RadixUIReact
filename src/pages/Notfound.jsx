import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { NavLink } from "react-router-dom";
function Notfound() {
  return (
    <Flex direction="column" gap="5">
      <Text weight="bold" className="four">404</Text>
      <Text>page not found</Text>
      <NavLink to="/">
        <Button variant="outline">Back To Home</Button>
      </NavLink>
    </Flex>
  );
}

export default Notfound;
