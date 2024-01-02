import { Avatar, Flex, Grid, Section, Text } from '@radix-ui/themes'
import React from 'react'
import avataimg from "../assets/jake.jpg"
import avataimg1 from "../assets/alex.jpg"
import avataimg2 from "../assets/michael.jpg"


export default function Cards() {
    return (
        <Flex className="cards-container" justify="between" gap="3" >
            <Grid className="card-item item-one" align="end">
                <Text className="num" size="8">10 M+</Text>
                <Text className="card-description" size="1" weight="bold">Happy Customers</Text>
                <Grid className="avatar">
                    <Avatar

                        src={avataimg2}
                        fallback="A"
                        size="2"
                        radius="full"
                        style={{
                            position: "relative",

                            right: "50px",
                            top: "10px"
                        }}
                    />
                    <Avatar
                        src={avataimg}
                        fallback="A"
                        size="2"
                        radius="full"
                        style={{
                            position: "relative",


                            top: "-10px"
                        }}
                    />
                    <Avatar
                        src={avataimg1}
                        fallback="A"
                        size="3"
                        radius="full"
                        style={{
                            position: "relative",

                            right: "40px",
                            bottom: "20px"
                        }}
                    />
                </Grid>
            </Grid>
            <Grid className="card-item item-two" align="end">
                <Text className="num" size="8">12 K+</Text>
                <Text className="card-description" size="1" weight="bold">Elegant Properties</Text>
                <Grid className="avatar">

                </Grid>
            </Grid>
            <Grid className="card-item item-three" align="end">
                <Text className="num" size="8">8+</Text>
                <Text className="card-description" size="1" weight="bold">Years Of Service</Text>
                <Text className="avatar b-faded" size="9" weight="bold">
                    Urban
                </Text>
            </Grid>

        </Flex>
    )

}
