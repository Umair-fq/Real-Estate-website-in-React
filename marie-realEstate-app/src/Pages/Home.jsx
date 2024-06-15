import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import HouseList from '../Components/HouseList/HouseList'
import Footer from '../Components/Footer/Footer'


const Home = () => {
  return (
    <>
        <Navbar />
        <Banner />
        <HouseList />
        <Footer />
    </>
  )
}

export default Home