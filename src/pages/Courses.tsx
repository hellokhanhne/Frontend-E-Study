import React from 'react';
import { ListCourse, PageTitle } from '~/components/CourseComponent';

const Courses = () => {
  return (
    <div>
      {/* ============================ Page Title Start================================== */}
      <PageTitle page='Find Courses' title='Find your course?' />
      {/* ============================ Page Title End ================================== */}
      {/* ============================ All Cources ================================== */}
      <section className='gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12'>
              <div className='page-sidebar p-0'>
                <a
                  className='filter_links'
                  data-toggle='collapse'
                  href='#fltbox'
                  role='button'
                  aria-expanded='false'
                  aria-controls='fltbox'
                >
                  Open Advance Filter
                  <i className='fa fa-sliders-h ml-2' />
                </a>
                <div className='collapse' id='fltbox'>
                  {/* Find New Property */}
                  <div className='sidebar-widgets p-4'>
                    <div className='form-group'>
                      <div className='input-with-icon'>
                        <input
                          type='text'
                          className='form-control'
                          placeholder='Search Your Cources'
                        />
                        <i className='ti-search' />
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='simple-input'>
                        <select id='cates' className='form-control'>
                          <option value=''>&nbsp;</option>
                          <option value={1}>IT &amp; Software</option>
                          <option value={2}>Banking</option>
                          <option value={3}>Medical</option>
                          <option value={4}>Insurence</option>
                          <option value={5}>Finance &amp; Accounting</option>
                        </select>
                      </div>
                    </div>
                    <div className='form-group'>
                      <h6>Top Instructor</h6>
                      <ul className='no-ul-list mb-3'>
                        <li>
                          <input
                            id='aa-41'
                            className='checkbox-custom'
                            name='aa-41'
                            type='checkbox'
                          />
                          <label htmlFor='aa-41' className='checkbox-custom-label'>
                            Keny White<i className='count'>12</i>
                          </label>
                        </li>
                        <li>
                          <input
                            id='aa-2'
                            className='checkbox-custom'
                            name='aa-2'
                            type='checkbox'
                          />
                          <label htmlFor='aa-2' className='checkbox-custom-label'>
                            Hinata Hyuga<i className='count'>10</i>
                          </label>
                        </li>
                        <li>
                          <input
                            id='aa-3'
                            className='checkbox-custom'
                            name='aa-3'
                            type='checkbox'
                          />
                          <label htmlFor='aa-3' className='checkbox-custom-label'>
                            Mike hussy<i className='count'>56</i>
                          </label>
                        </li>
                        <li>
                          <input
                            id='aa-71'
                            className='checkbox-custom'
                            name='aa-71'
                            type='checkbox'
                          />
                          <label htmlFor='aa-71' className='checkbox-custom-label'>
                            Adam Riky <i className='count'>42</i>
                          </label>
                        </li>
                        <li>
                          <input
                            id='aa-81'
                            className='checkbox-custom'
                            name='aa-81'
                            type='checkbox'
                          />
                          <label htmlFor='aa-81' className='checkbox-custom-label'>
                            Dev Patel<i className='count'>12</i>
                          </label>
                        </li>
                        <li>
                          <input
                            id='aa-91'
                            className='checkbox-custom'
                            name='aa-91'
                            type='checkbox'
                          />
                          <label htmlFor='aa-91' className='checkbox-custom-label'>
                            Mike Hussy<i className='count'>36</i>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className='form-group'>
                      <h6>Skill Level</h6>
                      <ul className='no-ul-list mb-3'>
                        <li>
                          <input id='l1' className='checkbox-custom' name='l1' type='checkbox' />
                          <label htmlFor='l1' className='checkbox-custom-label'>
                            Beginning
                          </label>
                        </li>
                        <li>
                          <input id='l2' className='checkbox-custom' name='l2' type='checkbox' />
                          <label htmlFor='l2' className='checkbox-custom-label'>
                            Basic Level
                          </label>
                        </li>
                        <li>
                          <input id='l3' className='checkbox-custom' name='l3' type='checkbox' />
                          <label htmlFor='l3' className='checkbox-custom-label'>
                            Iner Level
                          </label>
                        </li>
                        <li>
                          <input id='l4' className='checkbox-custom' name='l4' type='checkbox' />
                          <label htmlFor='l4' className='checkbox-custom-label'>
                            Advance
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className='form-group'>
                      <h6>Price</h6>
                      <ul className='no-ul-list mb-3'>
                        <li>
                          <input id='p1' className='checkbox-custom' name='p1' type='checkbox' />
                          <label htmlFor='p1' className='checkbox-custom-label'>
                            All<i className='count'>89</i>
                          </label>
                        </li>
                        <li>
                          <input id='p2' className='checkbox-custom' name='p2' type='checkbox' />
                          <label htmlFor='p2' className='checkbox-custom-label'>
                            Free<i className='count'>56</i>
                          </label>
                        </li>
                        <li>
                          <input id='p3' className='checkbox-custom' name='p3' type='checkbox' />
                          <label htmlFor='p3' className='checkbox-custom-label'>
                            Paid<i className='count'>42</i>
                          </label>
                        </li>
                      </ul>
                    </div>
                    <div className='row'>
                      <div className='col-lg-12 col-md-12 col-sm-12 pt-4'>
                        <button className='btn theme-bg rounded full-width'>Apply Filter</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar End */}
            </div>
            {/* Content */}
            <ListCourse />
          </div>
        </div>
      </section>
      {/* ============================ All Cources ================================== */}
    </div>
  );
};

export default Courses;
