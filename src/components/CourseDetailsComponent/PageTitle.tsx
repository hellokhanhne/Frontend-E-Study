import React from 'react';

const PageTitle = () => {
  return (
    <div className='ed_detail_head'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 col-md-7'>
            <div className='ed_detail_wrap'>
              <div className='crs_cates cl_1'>
                <span>Design</span>
              </div>
              <div className='crs_cates cl_3'>
                <span>Design</span>
              </div>
              <div className='ed_header_caption'>
                <h2 className='ed_title'>Ruby on Rails Program</h2>
                <ul>
                  <li>
                    <i className='ti-calendar' />
                    10 - 20 weeks
                  </li>
                  <li>
                    <i className='ti-control-forward' />
                    102 Lectures
                  </li>
                  <li>
                    <i className='ti-user' />
                    502 Student Enrolled
                  </li>
                </ul>
              </div>
              <div className='ed_header_short'>
                <p>
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore. veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo.
                </p>
              </div>
              <div className='ed_rate_info'>
                <div className='star_info'>
                  <i className='fas fa-star filled' />
                  <i className='fas fa-star filled' />
                  <i className='fas fa-star filled' />
                  <i className='fas fa-star filled' />
                  <i className='fas fa-star' />
                </div>
                <div className='review_counter'>
                  <strong className='high'>4.7</strong> 3572 Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
