import React from 'react';
import Banner from '~/components/Banner';
import {
  BestInstructor,
  ExploreCourse,
  ExporeCategory,
  Introduce,
  News,
  Question,
  Review,
} from '~/components/HomeComponent';

const Home = () => {
  return (
    <>
      <Banner />
      <ExploreCourse />
      <ExporeCategory />
      <BestInstructor />
      <Introduce />
      <Review />
      <News />
      <Question />
    </>
  );
};

export default Home;
