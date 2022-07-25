import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, IAuthContext } from '~/context/AuthContext';
import './index.css';
import UserLogin from './UserLogin';

const Header = () => {
  // console.log('re-render-header');
  const {
    authState: { user, isAuthenticate },
  } = useContext(AuthContext) as IAuthContext;

  return (
    <>
      <div className='header theme-bg light-menu'>
        <div className='container'>
          <nav id='navigation' className='navigation navigation-landscape'>
            <div className='nav-header'>
              <a className='nav-brand' href='#'>
                <img src='assets/img/light-logo.png' className='logo' alt='' />
              </a>
              <div className='nav-toggle' />
              <div className='mobile_nav'>
                <ul>
                  <li>
                    {!isAuthenticate ? (
                      <Link to='/login' className='crs_yuo12 w-auto text-white theme-bg'>
                        <span className='embos_45'>
                          <i className='fas fa-sign-in-alt mr-1' />
                          Sign In
                        </span>
                      </Link>
                    ) : (
                      <UserLogin avatar={user?.avatar} username={user?.username} />
                    )}
                  </li>
                </ul>
              </div>
            </div>
            <div className='nav-menus-wrapper'>
              <ul className='nav-menu'>
                <li className='active'>
                  <Link to='/'>Home</Link>
                </li>
                <li>
                  <Link to='/courses'>Courses</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
                <li>
                  <Link to='/faq'>FAQ</Link>
                </li>
                <li>
                  <a href='/dashboard'>Dashboard</a>
                </li>
                {/* <li>
                  <a href='#'>
                    Pages
                    <span className='submenu-indicator' />
                  </a>
                  <ul className='nav-dropdown nav-submenu'>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li>
                      <a href='contact.html'>Say Hello</a>
                    </li>
                    <li>
                      <a href='blogs.html'>Blog Style</a>
                    </li>
                  </ul>
                </li> */}
              </ul>
              <ul className='nav-menu nav-menu-social align-to-right'>
                {!isAuthenticate ? (
                  <>
                    <li>
                      <Link to='/login' data-toggle='modal' data-target='#login'>
                        <i className='fas fa-sign-in-alt mr-1' />
                        <span className='dn-lg'>Sign In</span>
                      </Link>
                    </li>
                    <li className='add-listing bg-white'>
                      <a href='signup.html' className='text-white'>
                        Get Started
                      </a>
                    </li>
                  </>
                ) : (
                  <li
                    className='d-flex pointer'
                    style={{
                      height: 80,
                    }}
                  >
                    {' '}
                    <UserLogin avatar={user?.avatar} username={user?.username} />
                  </li>
                )}
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <div className='clearfix' />
    </>
  );
};

export default React.memo(Header);
