import React from 'react'

export default async function getAllHouses() {

    const data = await fetch('http://localhost:3000/houses')
    const houses = await data.json()
    
  return houses
}
getAllHouses()