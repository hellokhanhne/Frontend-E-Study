import React from 'react';

const BestInstructor = () => {
  return (
    <section>
      <div className='container'>
        <div className='row align-items-center justify-content-between mb-5'>
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
            <div className='lmp_caption'>
              <h2 className='mb-3'>We Have The Best Instructors Available in The City</h2>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
                excepturi sint occaecati cupiditate non provident, similique
              </p>
              <div className='mb-3 mr-4 ml-lg-0 mr-lg-4'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center'>
                    <i className='fas fa-check' />
                  </div>
                  <h6 className='mb-0 ml-3'>Full lifetime access</h6>
                </div>
              </div>
              <div className='mb-3 mr-4 ml-lg-0 mr-lg-4'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center'>
                    <i className='fas fa-check' />
                  </div>
                  <h6 className='mb-0 ml-3'>20+ downloadable resources</h6>
                </div>
              </div>
              <div className='mb-3 mr-4 ml-lg-0 mr-lg-4'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center'>
                    <i className='fas fa-check' />
                  </div>
                  <h6 className='mb-0 ml-3'>Certificate of completion</h6>
                </div>
              </div>
              <div className='mb-3 mr-4 ml-lg-0 mr-lg-4'>
                <div className='d-flex align-items-center'>
                  <div className='rounded-circle bg-light-success theme-cl p-2 small d-flex align-items-center justify-content-center'>
                    <i className='fas fa-check' />
                  </div>
                  <h6 className='mb-0 ml-3'>Free Trial 7 Days</h6>
                </div>
              </div>
              <div className='text-left mt-4'>
                <a href='#' className='btn btn-md text-light theme-bg'>
                  Enrolled Today
                </a>
              </div>
            </div>
          </div>
          <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12'>
            <div className='lmp_thumb'>
              <img src='https://via.placeholder.com/1000x850' className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestInstructor;
