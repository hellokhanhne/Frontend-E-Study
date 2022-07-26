import React from 'react';
import { Link } from 'react-router-dom';
import { useScript } from '~/hooks';

const AdminSideBar = () => {
  useScript('/assets/js/sidebaradmin.js');
  return (
    <div className='dashboard-navbar'>
      <div className='d-user-avater'>
        <img src='https://via.placeholder.com/500x500' className='img-fluid avater' alt='' />
        <h4>Adam Harshvardhan</h4>
        <span>Senior Designer</span>
        <div className='elso_syu89'>
          <ul>
            <li>
              <Link to='#'>
                <i className='ti-facebook' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='ti-twitter' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='ti-instagram' />
              </Link>
            </li>
            <li>
              <Link to='#'>
                <i className='ti-linkedin' />
              </Link>
            </li>
          </ul>
        </div>
        <div className='elso_syu77'>
          <div className='one_third'>
            <div className='one_45ic text-warning bg-light-warning'>
              <i className='fas fa-star' />
            </div>
            <span>Ratings</span>
          </div>
          <div className='one_third'>
            <div className='one_45ic text-success bg-light-success'>
              <i className='fas fa-file-invoice' />
            </div>
            <span>Courses</span>
          </div>
          <div className='one_third'>
            <div className='one_45ic text-purple bg-light-purple'>
              <i className='fas fa-user' />
            </div>
            <span>Enrolled User</span>
          </div>
        </div>
      </div>
      <div className='d-navigation'>
        <ul id='side-menu'>
          <li className='active'>
            <Link to='dashboard.html'>
              <i className='fas fa-th' />
              Dashboard
            </Link>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-shopping-basket' />
              Courses
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='manage-course.html'>Manage Courses</Link>
              </li>
              <li>
                <Link to='add-new-course.html'>Add New Course</Link>
              </li>
              <li>
                <Link to='/manage/category'>Course Category</Link>
              </li>
              <li>
                <Link to='coupons.html'>Coupons</Link>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-gem' />
              Enrollment
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='enroll-history.html'>Enroll History</Link>
              </li>
              <li>
                <Link to='enroll-student.html'>Enroll a Student</Link>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-archive' />
              Report
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='admin-revenue.html'>Admin Revenue</Link>
              </li>
              <li>
                <Link to='instructor-revenue.html'>Instructor Revenue</Link>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-user-shield' />
              Admins
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='manage-admins.html'>Manage Admins</Link>
              </li>
              <li>
                <Link to='add-admin.html'>Add New Admins</Link>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-toolbox' />
              Instructors
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='manage-instructor.html'>Manage Instructors</Link>
              </li>
              <li>
                <Link to='add-instructor.html'>Add New Instructors</Link>
              </li>
              <li>
                <Link to='instructor-payout.html'>Instructors Payouts</Link>
              </li>
            </ul>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-user' />
              Students
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='manage-students.html'>Manage Students</Link>
              </li>
              <li>
                <Link to='add-students.html'>Add New Student</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to='addon-manager.html'>
              <i className='fas fa-layer-group' />
              Addon
            </Link>
          </li>
          <li>
            <Link to='themes.html'>
              <i className='fas fa-paint-brush' />
              Themes
            </Link>
          </li>
          <li>
            <Link to='messages.html'>
              <i className='fas fa-comments' />
              Message
            </Link>
          </li>
          <li>
            <Link to='/manage/profile'>
              <i className='fas fa-address-card' />
              My Profile
            </Link>
          </li>
          <li className='dropdown'>
            <Link to='javascript:void(0);'>
              <i className='fas fa-cog' />
              Settings
              <span className='ti-angle-left' />
            </Link>
            <ul className='nav nav-second-level'>
              <li>
                <Link to='website-settings.html'>Website Settings</Link>
              </li>
              <li>
                <Link to='system-settings.html'>System Settings</Link>
              </li>
              <li>
                <Link to='payment_settings.html'>Payment Settings</Link>
              </li>
              <li>
                <Link to='social-login.html'>Social Logins</Link>
              </li>
              <li>
                <Link to='smtp-setting.html'>SMTP Settings</Link>
              </li>
              <li>
                <Link to='dash-about.html'>About App</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminSideBar;
