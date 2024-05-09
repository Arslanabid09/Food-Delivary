import React from 'react'
import Carasoul from '../../component/Carasoul/carasoul'
import ProductList from '../../component/bycategories/ProductList'

const Home = () => {
  return (
    <>
    <div className="home text-black"><Carasoul/></div>
    <div className="home text-black"><ProductList/></div>
    </>
  )
}

export default Home