import React, { Suspense } from 'react';
import ProductList from '../../component/bycategories/ProductList';
import { Loading } from '../../indexx';

import Carasoul from '../../component/Carasoul/carasoul';

const Home = () => {
  return (
    <>
      <div className="home text-black">

          <Carasoul />
        
      </div>
      <div className="home text-black"><ProductList /></div>
    </>
  )
}

export default Home;
