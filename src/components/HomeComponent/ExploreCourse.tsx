import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { courseSelector, getAllCourse } from '~/store/reducers/courseReducer';
import { CourseCard } from '../Course';

const ExploreCourse = () => {
  const { courses } = useAppSelector(courseSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);
  return (
    <section>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-7 col-md-8'>
            <div className='sec-heading center'>
              <h2>
                explore Featured <span className='theme-cl'>Cources</span>
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
        <div className='row justify-content-center'>
          {/* Single Grid */}
          {courses.slice(0, 6).map((c) => (
            <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={c.id}>
              <CourseCard course={c} />
            </div>
          ))}
        </div>
        <div className='row justify-content-center'>
          <div className='col-lg-7 col-md-8 mt-2'>
            <div className='text-center'>
              <a
                href='grid-layout-with-sidebar.html'
                className='btn btn-md theme-bg-light theme-cl'
              >
                Explore More Cources
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCourse;
