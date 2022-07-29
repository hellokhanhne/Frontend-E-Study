import React, { useState } from 'react';
import ReviewCourse from './ReviewCourse';
import SubmitReview from './SubmitReview';

const RenderReview = () => {
  const [reviews, setReviews] = useState();

  return (
    <>
      {/* Reviews */}
      <ReviewCourse />
      {/* Submit Reviews */}
      <SubmitReview />
    </>
  );
};

export default RenderReview;
