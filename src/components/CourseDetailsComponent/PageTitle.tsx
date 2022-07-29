import React from 'react';
import { ICourseCommonProps } from './props.common.interface';

const PageTitle = ({ course }: ICourseCommonProps) => {
  return (
    <div className='ed_detail_head'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-8 '>
            <div className='ed_detail_wrap'>
              <div className='crs_cates cl_1'>
                <span>{course?.category.name}</span>
              </div>
              <div className='crs_cates cl_3'>
                <span>{course?.category.name}</span>
              </div>
              <div className='ed_header_caption'>
                <h2 className='ed_title'>{course?.name}</h2>
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
                    {course?.enrollNumber} Student Enrolled
                  </li>
                </ul>
              </div>
              <div className='ed_header_short'>
                <p>{course?.short_desc}</p>
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
          <div className='col-lg-4'>
            <img className='w-100 h-100p cover rounded' src={course?.imageUrl} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
