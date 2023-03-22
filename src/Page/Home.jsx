import React from 'react';
import Hero from '../component.jsx/Hero';
import Navbar from '../component.jsx/Navbar';
import Video_sec from '../component.jsx/Video_sec';

const Home = () => {
  return (
    <div>
      <Navbar/>        
      <Hero/> 
      <Video_sec/>
    </div>
  );
}

export default Home;
