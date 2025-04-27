import React from 'react';
import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import Clients from '../components/home/Clients';
import WhyUs from '../components/home/WhyUs';
import Team from '../components/home/Team';
import Tools from '../components/home/Tools';

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Clients />
      <WhyUs />
      <Team />
      <Tools />
    </div>
  );
};

export default HomePage;