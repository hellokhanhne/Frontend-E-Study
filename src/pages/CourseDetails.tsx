import React from 'react';
import {
  Instructor,
  OverviewCourse,
  PageTitle,
  Rating,
  ReviewCourse,
  Sidebar,
  SubmitReview,
} from '~/components/CourseDetailsComponent';

const CourseDetails = () => {
  return (
    <div>
      {/* ============================ Page Title Start================================== */}
      <PageTitle />
      {/* ============================ Page Title End ================================== */}
      {/* ============================ Course Detail ================================== */}
      <section className='gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 order-lg-first'>
              {/* Overview */}
              <OverviewCourse />
              {/* Rating */}
              <Rating />
              {/* instructor */}
              <Instructor />
              {/* Reviews */}
              <ReviewCourse />
              {/* Submit Reviews */}
              <SubmitReview />
            </div>
            {/* Sidebar */}
            <Sidebar />
          </div>
        </div>
      </section>
      {/* ============================ Course Detail ================================== */}
    </div>
  );
};

export default CourseDetails;
