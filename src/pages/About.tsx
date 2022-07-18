import React from 'react';
import { AboutDetails, PageTitle, Partner } from '~/components/AboutComponent';
import { Review } from '~/components/HomeComponent';

const About = () => {
  return (
    <div>
      {/* ============================ Page Title Start================================== */}
      <PageTitle page='About Us' title='Who We Are?' />
      {/* ============================ Page Title End ================================== */}
      {/* ============================ About Detail ================================== */}
      <AboutDetails />
      {/* ============================ About Detail ================================== */}
      {/* ============================ partner Start ================================== */}
      <Partner />
      <div className='clearfix' />
      {/* ============================ partner End ================================== */}
      <Review />
    </div>
  );
};

export default About;
