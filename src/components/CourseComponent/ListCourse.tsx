import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { courseSelector, getAllCourse } from '~/store/reducers/courseReducer';
import CourseCard from '../Course/CourseCard';

const ListCourse = () => {
  const { courses } = useAppSelector(courseSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCourse());
  }, []);
  return (
    <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <div className='short_wraping'>
            <div className='row m-0 align-items-center justify-content-between'>
              <div className='col-lg-4 col-md-5 col-sm-12  col-sm-6'>
                <div className='shorting_pagination_laft'>
                  <h6 className='m-0'>Showing 1-25 of 72</h6>
                </div>
              </div>
              <div className='col-lg-8 col-md-7 col-sm-12 col-sm-6'>
                <div className='dlks_152'>
                  <div className='shorting-right mr-2'>
                    <label>Short By:</label>
                    <div className='dropdown show'>
                      <a
                        className='btn btn-filter dropdown-toggle'
                        href='#'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                      >
                        <span className='selection'>Most Rated</span>
                      </a>
                      <div className='drp-select dropdown-menu'>
                        <a className='dropdown-item' href='JavaScript:Void(0);'>
                          Most Rated
                        </a>
                        <a className='dropdown-item' href='JavaScript:Void(0);'>
                          Most Viewd
                        </a>
                        <a className='dropdown-item' href='JavaScript:Void(0);'>
                          News Listings
                        </a>
                        <a className='dropdown-item' href='JavaScript:Void(0);'>
                          High Rated
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='lmk_485'>
                    <ul className='shorting_grid'>
                      <li className='list-inline-item'>
                        <a href='grid-layout-with-sidebar.html' className='active'>
                          <span className='ti-layout-grid2' />
                        </a>
                      </li>
                      <li className='list-inline-item'>
                        <a href='list-layout-with-sidebar.html'>
                          <span className='ti-view-list' />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center'>
        {courses.map((c) => (
          <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12' key={c.id}>
            <CourseCard course={c} />
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className='row'>
        <div className='col-lg-12 col-md-12 col-sm-12'>
          <ul className='pagination p-center'>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Previous'>
                <span className='ti-arrow-left' />
                <span className='sr-only'>Previous</span>
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                1
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                2
              </a>
            </li>
            <li className='page-item active'>
              <a className='page-link' href='#'>
                3
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                ...
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#'>
                18
              </a>
            </li>
            <li className='page-item'>
              <a className='page-link' href='#' aria-label='Next'>
                <span className='ti-arrow-right' />
                <span className='sr-only'>Next</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListCourse;
