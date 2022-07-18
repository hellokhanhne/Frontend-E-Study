import React from 'react';

const Instructor = () => {
  return (
    <div className='single_instructor'>
      <div className='single_instructor_thumb'>
        <a href='#'>
          <img src='https://via.placeholder.com/500x500' className='img-fluid' alt='' />
        </a>
      </div>
      <div className='single_instructor_caption'>
        <h4>
          <a href='#'>Jonathan Campbell</a>
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
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
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
