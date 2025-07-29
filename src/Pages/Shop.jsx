import React from 'react'
import Hero from '../Components/Navbar/Hero/Hero'
import Popular from '../Components/Populer/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import Newslatter from '../Components/NewsLatter/Newslatter'

function Shop() {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollections/>
        <Newslatter/>
    </div>
  )
}

export default Shop