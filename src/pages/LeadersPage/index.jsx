import React from 'react';
import HeroLeaders from '../../components/HeroLeaders/HeroLeaders';
import About from '../../components/About/About';
import Subscript from '../../components/Subscript/Subscript';
import Footer from '../../layout/Footer/footer';
import Mentors from '../../components/Mentors';

const LeadersPage = () => {
  return (
    <>
      <HeroLeaders />
      <About />
      <Mentors />
      <Subscript />
      <Footer />
    </>
  );
};

export default LeadersPage;
