import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import { Flex } from '@radix-ui/themes'

function HomeLayout() {
    return (
        <div className="main-container">
            
                <Nav />
           
            <Flex  direction="column" justify="start">

                <Outlet />
            </Flex>
          
        </div>

    )
}

export default HomeLayout