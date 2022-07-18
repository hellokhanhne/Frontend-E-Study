import React from 'react';

const NotFound = () => {
  return (
    <section className='error-wrap'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-6 col-md-10'>
            <div className='text-center'>
              <img src='assets/img/404.png' className='img-fluid' alt='' />
              <p>
                Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                ultricies laoreet ullamcorper phasellus semper
              </p>
              <a className='btn theme-bg text-white btn-md' href='index.html'>
                Back To Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
