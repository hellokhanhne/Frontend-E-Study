import React, { useContext, useEffect } from 'react';
import Breadcrumb from '~/components/common/Breadcrumb';
import { CourseCard } from '~/components/ManageCourseComponent';
import { AuthContext, IAuthContext } from '~/context';

import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { courseSelector, getAllCourse } from '~/store/reducers/courseReducer';

const ManageCourse = () => {
  const { courses } = useAppSelector(courseSelector);
  const dispatch = useAppDispatch();
  const {
    authState: { user },
  } = useContext(AuthContext) as IAuthContext;
  useEffect(() => {
    dispatch(getAllCourse());
  }, []);
  return (
    <>
      <Breadcrumb title2='Manage course' />
      <div className='dashboard_wrap'>
        <div className='row'>
          <div className='col-xl-12 col-lg-12 col-md-12 mb-4'>
            <h6 className='m-0'>List course of you</h6>
          </div>
        </div>
        <div className='row justify-content-center'>
          {/* Single Grid */}
          {courses
            .filter((c) => c.instructor.id === user?.id)
            .map((c) => (
              <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12' key={c.id}>
                <CourseCard course={c} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ManageCourse;
