import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProductCollection from '../components/ProductCollection'

const Page2 = () => {
  return (
    <Layout>
       <Hero />
       {/* Product section */}
       <ProductCollection />
    </Layout>
  )
}

export default Page2