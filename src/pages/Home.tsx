import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import BlogList from '../components/BlogList'

const Home = () => {
  return (
    <Layout >

        {/* Hero section */}
        <Hero />

        {/* Banner section */}
        <Banner /> 

       
    </Layout>
  )
}

export default Home