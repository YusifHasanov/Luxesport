import React from 'react'
import Brand from './Brand'
import style from './Home.module.css'
import HomeHeader from './HomeHeader'
import NewArrivals from './NewArrivals'
import News from './News'
import ShopCatagory from './ShopCatagory'
import ShopifySection from './ShopifySection'
import ShopSection from './ShopSection'
const Home = () => {
  return (
    <div className={style.Home_Container}>
        <HomeHeader/>
        <ShopSection/>
        <ShopifySection/>
        <ShopCatagory/>
        <NewArrivals/>
        <Brand/>
        <News/>
    </div>
  )
}

export default Home