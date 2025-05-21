import Navbar from '@/components/navbar'
import React from 'react'
import Stats from '@/components/stats'
import Footer from '@/components/footer';
import Explore from '@/components/explore';
import Hero from '@/components/hero';
const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Explore />
      <Stats />
      <Footer />
    </div>
  );
};

export default page