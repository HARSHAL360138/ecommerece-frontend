import React from 'react'
import HeroSection from '../components/HeroSection'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import OurProducts from '../components/OurProducts'
import SubscriptionOffer from '../components/SubscriptionOffer'
import Testimonials from '../components/Testimonials'
import WhyShopWithUs from '../components/WhyShopWithUs'

function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyShopWithUs/>
      <OurProducts/>
      <Category/>
      <SubscriptionOffer/>
      <Testimonials/> 
    </div>
  )
}

export default Home