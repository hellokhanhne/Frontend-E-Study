import React from 'react';

const ListCourse = () => {
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
        {/* Single Grid */}
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <div className='crs_grid shadow_none brd'>
            <div className='crs_grid_thumb'>
              <a href='course-detail.html' className='crs_detail_link'>
                <img
                  src='https://via.placeholder.com/1200x800'
                  className='img-fluid rounded'
                  alt=''
                />
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
                  <div className='crs_cates cl_8'>
                    <span>Design</span>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_inrolled'>
                    <strong>8,350</strong>Enrolled
                  </div>
                </div>
              </div>
              <div className='crs_title'>
                <h4>
                  <a href='course-detail.html' className='crs_title_link'>
                    UI/UX Design pattern for succesfull software Applications
                  </a>
                </h4>
              </div>
              <div className='crs_info_detail'>
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
              </div>
            </div>
            <div className='crs_grid_foot'>
              <div className='crs_flex'>
                <div className='crs_fl_first'>
                  <div className='crs_tutor'>
                    <div className='crs_tutor_thumb'>
                      <a href='instructor-detail.html'>
                        <img
                          src='https://via.placeholder.com/500x500'
                          className='img-fluid circle'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='crs_tutor_name'>
                      <a href='instructor-detail.html'>Robert Fox</a>
                    </div>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_price'>
                    <h2>
                      <span className='currency'>$</span>
                      <span className='theme-cl'>149</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Grid */}
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <div className='crs_grid shadow_none brd'>
            <div className='crs_grid_thumb'>
              <a href='course-detail.html' className='crs_detail_link'>
                <img
                  src='https://via.placeholder.com/1200x800'
                  className='img-fluid rounded'
                  alt=''
                />
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
                  <div className='crs_cates cl_1'>
                    <span>Banking</span>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_inrolled'>
                    <strong>7,150</strong>Enrolled
                  </div>
                </div>
              </div>
              <div className='crs_title'>
                <h4>
                  <a href='course-detail.html' className='crs_title_link'>
                    Basic knowledge about hodiernal bharat in history
                  </a>
                </h4>
              </div>
              <div className='crs_info_detail'>
                <ul>
                  <li>
                    <i className='fa fa-clock text-danger' />
                    <span>05 hr 07 min</span>
                  </li>
                  <li>
                    <i className='fa fa-video text-success' />
                    <span>22 Lectures</span>
                  </li>
                  <li>
                    <i className='fa fa-signal text-warning' />
                    <span>Beginer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='crs_grid_foot'>
              <div className='crs_flex'>
                <div className='crs_fl_first'>
                  <div className='crs_tutor'>
                    <div className='crs_tutor_thumb'>
                      <a href='instructor-detail.html'>
                        <img
                          src='https://via.placeholder.com/500x500'
                          className='img-fluid circle'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='crs_tutor_name'>
                      <a href='instructor-detail.html'>Robert Fox</a>
                    </div>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_price'>
                    <h2>
                      <span className='currency'>$</span>
                      <span className='theme-cl'>99</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Grid */}
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <div className='crs_grid shadow_none brd'>
            <div className='crs_grid_thumb'>
              <a href='course-detail.html' className='crs_detail_link'>
                <img
                  src='https://via.placeholder.com/1200x800'
                  className='img-fluid rounded'
                  alt=''
                />
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
                  <div className='crs_cates cl_4'>
                    <span>Development</span>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_inrolled'>
                    <strong>1,250</strong>Enrolled
                  </div>
                </div>
              </div>
              <div className='crs_title'>
                <h4>
                  <a href='course-detail.html' className='crs_title_link'>
                    Advance PHP knowledge with laravel to make smart web
                  </a>
                </h4>
              </div>
              <div className='crs_info_detail'>
                <ul>
                  <li>
                    <i className='fa fa-clock text-danger' />
                    <span>07 hr 05 min</span>
                  </li>
                  <li>
                    <i className='fa fa-video text-success' />
                    <span>42 Lectures</span>
                  </li>
                  <li>
                    <i className='fa fa-signal text-warning' />
                    <span>Beginer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='crs_grid_foot'>
              <div className='crs_flex'>
                <div className='crs_fl_first'>
                  <div className='crs_tutor'>
                    <div className='crs_tutor_thumb'>
                      <a href='instructor-detail.html'>
                        <img
                          src='https://via.placeholder.com/500x500'
                          className='img-fluid circle'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='crs_tutor_name'>
                      <a href='instructor-detail.html'>Robert Fox</a>
                    </div>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_price'>
                    <h2>
                      <span className='currency'>$</span>
                      <span className='theme-cl'>129</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Grid */}
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <div className='crs_grid shadow_none brd'>
            <div className='crs_grid_thumb'>
              <a href='course-detail.html' className='crs_detail_link'>
                <img
                  src='https://via.placeholder.com/1200x800'
                  className='img-fluid rounded'
                  alt=''
                />
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
                  <div className='crs_cates cl_5'>
                    <span>Physics</span>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_inrolled'>
                    <strong>8,350</strong>Enrolled
                  </div>
                </div>
              </div>
              <div className='crs_title'>
                <h4>
                  <a href='course-detail.html' className='crs_title_link'>
                    The complete accounting &amp; bank financial course 2021
                  </a>
                </h4>
              </div>
              <div className='crs_info_detail'>
                <ul>
                  <li>
                    <i className='fa fa-clock text-danger' />
                    <span>05 hr 10 min</span>
                  </li>
                  <li>
                    <i className='fa fa-video text-success' />
                    <span>61 Lectures</span>
                  </li>
                  <li>
                    <i className='fa fa-signal text-warning' />
                    <span>Beginer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='crs_grid_foot'>
              <div className='crs_flex'>
                <div className='crs_fl_first'>
                  <div className='crs_tutor'>
                    <div className='crs_tutor_thumb'>
                      <a href='instructor-detail.html'>
                        <img
                          src='https://via.placeholder.com/500x500'
                          className='img-fluid circle'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='crs_tutor_name'>
                      <a href='instructor-detail.html'>Robert Fox</a>
                    </div>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_price'>
                    <h2>
                      <span className='currency'>$</span>
                      <span className='theme-cl'>49</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Grid */}
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <div className='crs_grid shadow_none brd'>
            <div className='crs_grid_thumb'>
              <a href='course-detail.html' className='crs_detail_link'>
                <img
                  src='https://via.placeholder.com/1200x800'
                  className='img-fluid rounded'
                  alt=''
                />
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
                  <div className='crs_cates cl_6'>
                    <span>Maths</span>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_inrolled'>
                    <strong>3,340</strong>Enrolled
                  </div>
                </div>
              </div>
              <div className='crs_title'>
                <h4>
                  <a href='course-detail.html' className='crs_title_link'>
                    The complete business plan course includes 50 templates
                  </a>
                </h4>
              </div>
              <div className='crs_info_detail'>
                <ul>
                  <li>
                    <i className='fa fa-clock text-danger' />
                    <span>10 hr 12 min</span>
                  </li>
                  <li>
                    <i className='fa fa-video text-success' />
                    <span>43 Lectures</span>
                  </li>
                  <li>
                    <i className='fa fa-signal text-warning' />
                    <span>Beginer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='crs_grid_foot'>
              <div className='crs_flex'>
                <div className='crs_fl_first'>
                  <div className='crs_tutor'>
                    <div className='crs_tutor_thumb'>
                      <a href='instructor-detail.html'>
                        <img
                          src='https://via.placeholder.com/500x500'
                          className='img-fluid circle'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='crs_tutor_name'>
                      <a href='instructor-detail.html'>Robert Fox</a>
                    </div>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_price'>
                    <h2>
                      <span className='currency'>$</span>
                      <span className='theme-cl'>119</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Single Grid */}
        <div className='col-xl-6 col-lg-6 col-md-6 col-sm-12'>
          <div className='crs_grid shadow_none brd'>
            <div className='crs_grid_thumb'>
              <a href='course-detail.html' className='crs_detail_link'>
                <img
                  src='https://via.placeholder.com/1200x800'
                  className='img-fluid rounded'
                  alt=''
                />
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
                  <div className='crs_cates cl_7'>
                    <span>History</span>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_inrolled'>
                    <strong>6,450</strong>Enrolled
                  </div>
                </div>
              </div>
              <div className='crs_title'>
                <h4>
                  <a href='course-detail.html' className='crs_title_link'>
                    Full web designing course with 20 web template designing
                  </a>
                </h4>
              </div>
              <div className='crs_info_detail'>
                <ul>
                  <li>
                    <i className='fa fa-clock text-danger' />
                    <span>07 hr 15 min</span>
                  </li>
                  <li>
                    <i className='fa fa-video text-success' />
                    <span>57 Lectures</span>
                  </li>
                  <li>
                    <i className='fa fa-signal text-warning' />
                    <span>Beginer</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='crs_grid_foot'>
              <div className='crs_flex'>
                <div className='crs_fl_first'>
                  <div className='crs_tutor'>
                    <div className='crs_tutor_thumb'>
                      <a href='instructor-detail.html'>
                        <img
                          src='https://via.placeholder.com/500x500'
                          className='img-fluid circle'
                          alt=''
                        />
                      </a>
                    </div>
                    <div className='crs_tutor_name'>
                      <a href='instructor-detail.html'>Robert Fox</a>
                    </div>
                  </div>
                </div>
                <div className='crs_fl_last'>
                  <div className='crs_price'>
                    <h2>
                      <span className='currency'>$</span>
                      <span className='theme-cl'>199</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
