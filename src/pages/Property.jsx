import { ChevronDownIcon, EyeClosedIcon, HeartFilledIcon, HeartIcon, LinkBreak2Icon, RulerSquareIcon } from '@radix-ui/react-icons'
import { Flex, Grid, Text } from '@radix-ui/themes'
import React, { useEffect } from 'react'
import h1 from "../assets/h1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import getAllHouses from '../../services/houses.api'
// import { faCoffee, heart } from '@fortawesome/free-solid-svg-icons'

function Property() {
    
    useEffect(()=>{
        
        getAllHouses()
    },[])

    return (
        <Grid className='property'>
            <Flex className="banner" direction="column" align="start" justify="start" gap="4">
                <Text size="8" weight="bold">Homes for you</Text>
                <Text size="4">Top Priority <ChevronDownIcon></ChevronDownIcon></Text>
            </Flex>
            <Flex className="house-cards" direction="column" align="start" gap="6">
                <Text size="8" weight="medium">Best Options</Text>
                <div className="card-item">
                    <div className="card-img">

                        <img src={h1} alt="" />
                    </div>
                    <Flex className="details" direction="column" align="start" gap="4">
                        <Text className='title' size="4" weight="medium">Suburbia Estates</Text>
                        <Text className='address' size="1" weight="">123 Main Street</Text>
                        <Flex className="card-badges" gap="2">
                            <Flex className="badge" align="center" gap="2">
                                < EyeClosedIcon />
                                <Text className="badge-detail" weight="bold" size="1">3</Text>
                            </Flex>
                            <Flex className="badge" align="center" gap="2">
                                < LinkBreak2Icon />
                                <Text className="badge-detail" weight="bold" size="1">4</Text>
                            </Flex>
                            <Flex className="badge" align="center" gap="2">
                                <RulerSquareIcon />
                                <Text className="badge-detail" weight="bold" size="1">2.3</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                    <Flex className='price-details' direction="column">
                        <Text className="price" size="6" weight="bold">$350000</Text>
                        <div className="icon heart">
                            <HeartFilledIcon />
                        </div>

                    </Flex>


                </div>
            </Flex>


        </Grid>
    )
}

export default Property