import React from 'react';
import Hero from '../component.jsx/Hero';
import Navbar from '../component.jsx/Navbar';
import Text from '../component.jsx/text';

const Home = () => {
  return (
    <div>
      <Navbar/>        
      <Hero/> 
      <Text/>
    </div>
  );
}

export default Home;
