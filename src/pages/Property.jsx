import { ChevronDownIcon, EyeClosedIcon, HeartFilledIcon, HeartIcon, LinkBreak2Icon, RulerSquareIcon } from '@radix-ui/react-icons'
import { Flex, Grid, Text } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import h1 from "../assets/h1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAllHouses from '../../services/houses.api'
// import { faCoffee, heart } from '@fortawesome/free-solid-svg-icons'

function Property() {
    const [houses, setHouses] = useState([])
    async function getData() {
        const data = await getAllHouses()
        console.log(data)
        setHouses(data)
    }
    console.log(houses)
    useEffect(() => {

        getData()
    }, [])

    return (
        <Grid className='property' >
            <Flex className="banner" direction="column" align="start" justify="start" gap="4">
                <Text size="8" weight="bold">Homes for you</Text>
                <Text size="4">Top Priority <ChevronDownIcon></ChevronDownIcon></Text>
            </Flex>
            <Flex className="house-cards" direction="column" align="start" gap="6">
                <Text size="8" weight="medium">Best Options</Text>
                {
                    houses.map((house) => {
                        return (
                            <div className="card-item">
                                <div className="card-img">

                                    <img src={house.image} alt="" />
                                </div>
                                <Flex className="details" direction="column" align="start" gap="4">
                                    <Text className='title' size="3" weight="medium" align="left" style={{color:"#DF3478"}}>{house.area}</Text>
                                    <Text className='address' size="1" weight="">{house.address}</Text>
                                    <Flex className="card-badges" gap="2" wrap="wrap">
                                        <Flex className="badge" align="center" gap="2">
                                            < EyeClosedIcon />
                                            <Text className="badge-detail" weight="bold" size="1">{house.bedrooms}</Text>
                                        </Flex>
                                        {/* <Flex className="badge" align="center" gap="2">
                                            < LinkBreak2Icon />
                                            <Text className="badge-detail" weight="bold" size="1">{house.bathrooms}</Text>
                                        </Flex> */}
                                        <Flex className="badge" align="center" gap="2">
                                            <RulerSquareIcon />
                                            <Text className="badge-detail" weight="bold" size="1">{house.square_feet}</Text>
                                        </Flex>
                                    </Flex>
                                </Flex>
                                <Flex className='price-details' direction="column">
                                    <Text className="price" size="5" weight="bold" style={{color:"#DF3478"}}>${house.price}</Text>
                                    <div className="icon heart">
                                        <HeartFilledIcon />
                                    </div>

                                </Flex>


                            </div>
                        )
                    })
                }

            </Flex>


        </Grid>
    )
}

export default Property