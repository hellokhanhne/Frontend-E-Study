import React from 'react';
import { ICourseCommonProps } from './props.common.interface';

const Instructor = ({ course }: ICourseCommonProps) => {
  return (
    <div className='single_instructor'>
      <div className='single_instructor_thumb'>
        <a href='#' className='d-block h-100p'>
          <img src={course?.instructor.avatar} className='img-fluid h-100p cover' alt='' />
        </a>
      </div>
      <div className='single_instructor_caption'>
        <h4>
          <a href='#'>{course?.instructor.firstName + ' ' + course?.instructor.lastName}</a>
        </h4>
        <ul className='instructor_info'>
          <li>
            <i className='ti-video-camera' />
            72 Videos
          </li>
          <li>
            <i className='ti-control-forward' />
            102 Lectures
          </li>
          <li>
            <i className='ti-user' />
            Exp. 4 Year
          </li>
        </ul>
        <p className='mb-1'>
          <b>Phone : </b> {course?.instructor.phone}
        </p>
        <p className='mb-1'>
          <b>Email : </b> {course?.instructor.email}
        </p>
        <ul className='social_info'>
          <li>
            <a href='#'>
              <i className='ti-facebook' />
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='ti-twitter' />
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='ti-linkedin' />
            </a>
          </li>
          <li>
            <a href='#'>
              <i className='ti-instagram' />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Instructor;
