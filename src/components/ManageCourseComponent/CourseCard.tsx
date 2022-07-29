import React from 'react';
import { Link } from 'react-router-dom';
import { ICourse } from '~/interface';
import ActionButton from './ActionButton';

interface ICourseCardProps {
  course: ICourse;
}

const CourseCard = ({ course }: ICourseCardProps) => {
  return (
    <div className='crs_grid'>
      <div className='crs_grid_thumb'>
        <div className='text-center py-3'>
          <img src={course.imageUrl} className='img-fluid rounded' alt='' />
          <ActionButton id={course.id} />
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
            <Link to={`/manage/courses/${course.id}`} className='crs_title_link'>
              {course.name}
            </Link>
          </h4>
        </div>
      </div>
      <div className='crs_grid_foot'>
        <div className='crs_flex'>
          <div className='crs_fl_first'>
            <div className='crs_tutor'>
              <div className='crs_tutor_name'>
                <b className='text-muted'>Sale percent : {course.sale_percent}%</b>
              </div>
            </div>
          </div>
          <div className='crs_fl_last'>
            <div className='crs_price'>
              <h2
                style={{
                  fontSize: 20,
                }}
              >
                <span className='currency mr-1'>$</span>
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
