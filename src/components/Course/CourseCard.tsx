import React from 'react';
import { Link } from 'react-router-dom';
import { ICourse } from '~/interface';

interface ICourseCardProps {
  course: ICourse;
}

const CourseCard = ({ course }: ICourseCardProps) => {
  return (
    <div className='crs_grid'>
      <div className='crs_grid_thumb'>
        <a href='course-detail.html' className='crs_detail_link'>
          <img src={course.imageUrl} className='img-fluid rounded py-4' alt='' />
        </a>
        <div className='crs_video_ico'>
          <i className='fa fa-play' />
        </div>
        <div className='crs_locked_ico'>
          <i className='fa fa-lock' />
        </div>
      </div>
      <div className='crs_grid_caption'>
        <div className='crs_flex'>
          <div className='crs_fl_first'>
            <div className={`crs_cates cl_${course.category.id}`}>
              <span>{course.category.name}</span>
            </div>
          </div>
          <div className='crs_fl_last'>
            <div className='crs_inrolled'>
              <strong>{course.enrollNumber}</strong>Enrolled
            </div>
          </div>
        </div>
        <div className='crs_title'>
          <h4>
            <Link to={`/courses/${course.id}`} className='crs_title_link'>
              {course.name}
            </Link>
          </h4>
        </div>
        {/* <div className='crs_info_detail'>
          <ul>
            <li>
              <i className='fa fa-clock text-danger' />
              <span>10 hr 07 min</span>
            </li>
            <li>
              <i className='fa fa-video text-success' />
              <span>67 Lectures</span>
            </li>
            <li>
              <i className='fa fa-signal text-warning' />
              <span>Beginer</span>
            </li>
          </ul>
        </div> */}
      </div>
      <div className='crs_grid_foot'>
        <div className='crs_flex'>
          <div className='crs_fl_first'>
            <div className='crs_tutor'>
              <div className='crs_tutor_thumb'>
                <a href='#'>
                  <img src={course.instructor.avatar} className='img-fluid circle' alt='' />
                </a>
              </div>
              <div className='crs_tutor_name'>
                <a href='#'>{course.instructor.lastName} </a>
              </div>
            </div>
          </div>
          <div className='crs_fl_last'>
            <div className='crs_price'>
              <h2>
                <span className='currency'>$</span>
                <span className='theme-cl'>
                  {(course.price - (course.price * course.sale_percent) / 100).toFixed(2)}
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
