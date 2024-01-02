import { Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React from "react";

function Buy() {
  return (
    <Grid className="buy" gap="4">
      <Flex gap="3">
        <Heading size="3" className="heading b-active">
          Buy
        </Heading>
        <Heading size="3" className="heading b-faded">
          Rent
        </Heading>
      </Flex>
      <Flex gap="3" justify="between">
        <Flex direction="column" align="start" className="buy-card" gap="1">
          <Text className="label b-faded" size="1" weight="bold">
            Location
          </Text>
          <Text className="b-normal" size="3" weight="bold">
            New York City
          </Text>
        </Flex>
        <div className="vl"></div>
        <Flex direction="column" align="start" className="buy-card" gap="1">
          <Text className="label b-faded" size="1" weight="bold">
            Property Type
          </Text>
          <Text className="b-normal" size="3" weight="bold">
            Duplex House
          </Text>
        </Flex>

        <div className="vl"></div>

        <Flex direction="column" align="start" className="buy-card" gap="1">
          <Text className="label b-faded" size="1" weight="bold">
            Price Range
          </Text>
          <Text className="b-normal" size="3" weight="bold">
            $21,000 - $40,000
          </Text>
        </Flex>
        <Button size="3" style={{ alignSelf: "end" }}>
          Search
        </Button>
      </Flex>
    </Grid>
  );
}

export default Buy;
