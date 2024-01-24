import { Button, Flex, Grid, Heading, Text } from "@radix-ui/themes";
import React, { useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import * as Form from "@radix-ui/react-form";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Buy() {
  const [city, setCity] = useState("New York");
  const [house, setHouse] = useState("Duplex House");

  const cityRef = useRef();
  const houseRef = useRef();

  const handleChange = (e) => {
    console.log(e.target.value);
    setCity(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("=============", cityRef.current.value);
    const c =cityRef.current.value
    const h =houseRef.current.value
    setCity(c)
    setHouse(h)
  };
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
            {city}
          </Text>
        </Flex>
        <div className="vl"></div>
        <Flex direction="column" align="start" className="buy-card" gap="1">
          <Text className="label b-faded" size="1" weight="bold">
            Property Type
          </Text>
          <Text className="b-normal" size="3" weight="bold">
            {house}
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
        <Dialog.Root>
          <Dialog.Trigger className="rm-padding" asChild>
            <Button
              className="search-btn"
              size="3"
              style={{ alignSelf: "end" }}
            >
              <MagnifyingGlassIcon />
              Search
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="DialogOverlay" />
            <Dialog.Content className="rm-padding DialogContent">
              <Form.Root className="FormRoot" onSubmit={handleSubmit}>
                <Form.Field className="FormField" name="email">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <Form.Label className="FormLabel">Country</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter a country
                    </Form.Message>
                    <Form.Message className="FormMessage" match="typeMismatch">
                      Please provide a Country Name
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      ref={cityRef}
                      className="Input"
                      type="name"
                      id="country-input"
                      required
                    />
                  </Form.Control>
                </Form.Field>

                <Form.Field className="FormField" name="question">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                    }}
                  >
                    <Form.Label className="FormLabel">State</Form.Label>
                    <Form.Message className="FormMessage" match="valueMissing">
                      Please enter a State
                    </Form.Message>
                  </div>
                  <Form.Control asChild>
                    <input
                      ref={houseRef}
                      className="Textarea"
                      id="location-input"
                      required
                    />
                  </Form.Control>
                </Form.Field>
                <Form.Submit asChild>
                  <button
                    className="Button"
                    type="submit"
                    variant="solid"
                    size={2}
                  >
                    Post question
                  </button>
                </Form.Submit>
              </Form.Root>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </Flex>
    </Grid>
  );
}

export default Buy;
