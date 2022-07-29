import React from 'react';
import { getCurrentPrice } from '~/utils/priceUtils';
import { ICourseCommonProps } from './props.common.interface';

const Sidebar = ({ course }: ICourseCommonProps) => {
  return (
    <div className='col-lg-4 col-md-12 order-lg-last'>
      <div className='ed_view_box style_2 stick_top'>
        <div className='ed_author'>
          <h2 className='theme-cl m-0'>
            ${getCurrentPrice(course?.price, course?.sale_percent).toFixed(2)}
            <span className='old_prc'>${course?.price.toFixed(2)}</span>
          </h2>
        </div>
        <div className='ed_view_features'>
          {/* <div className='eld mb-3'>
            <h5 className='font-medium'>This Course Include:</h5>
            <p>
              Aaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
              sunt explicabo.
            </p>
          </div> */}
          <div className='eld mb-3'>
            <ul className='edu_list right'>
              <li>
                <i className='ti-user' />
                Student Enrolled:<strong>{course?.enrollNumber}</strong>
              </li>
              <li>
                <i className='ti-files' />
                Topic:<strong>{course?.category.name}</strong>
              </li>
              <li>
                <i className='ti-game' />
                Quizzes:<strong>4</strong>
              </li>
              <li>
                <i className='ti-time' />
                Class:<strong>32 Lectures</strong>
              </li>
              <li>
                <i className='ti-tag' />
                Skill Level:<strong>Beginner</strong>
              </li>
            </ul>
          </div>
          <div className='eld mb-3'>
            <h5 className='font-medium'>Others Include:</h5>
            <ul>
              <li>
                <i className='fa fa-check' />
                Full lifetime access
              </li>
              <li>
                <i className='fa fa-check' />
                20+ downloadable resources
              </li>
              <li>
                <i className='fa fa-check' />
                Certificate of completion
              </li>
              <li>
                <i className='fa fa-check' />
                Free Trial 7 Days
              </li>
            </ul>
          </div>
        </div>
        <div className='ed_view_link'>
          <a href='#' className='btn theme-light enroll-btn'>
            Get Membership
            <i className='ti-angle-right' />
          </a>
          <a href='#' className='btn theme-bg enroll-btn'>
            Enroll Now
            <i className='ti-angle-right' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
