import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Journey_new from '../components/Journey_new';
import Video from '../components/Video';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>   
      <Video/>
      <Journey_new/>
    </div>
  );
}

export default Home;
