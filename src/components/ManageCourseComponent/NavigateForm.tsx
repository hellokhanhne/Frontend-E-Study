import React from 'react';

const NavigateForm = () => {
  return (
    <div
      className='nav flex-column nav-pills me-3'
      id='v-pills-tab'
      role='tablist'
      aria-orientation='vertical'
    >
      <button
        className='nav-link active'
        id='v-pills-basic-tab'
        data-toggle='pill'
        data-target='#v-pills-basic'
        type='button'
        role='tab'
        aria-controls='v-pills-basic'
        aria-selected='true'
      >
        Basic
      </button>

      <button
        className='nav-link'
        id='v-pills-pricing-tab'
        data-toggle='pill'
        data-target='#v-pills-pricing'
        type='button'
        role='tab'
        aria-controls='v-pills-pricing'
        aria-selected='false'
      >
        Pricing
      </button>
      <button
        className='nav-link'
        id='v-pills-media-tab'
        data-toggle='pill'
        data-target='#v-pills-media'
        type='button'
        role='tab'
        aria-controls='v-pills-media'
        aria-selected='false'
      >
        Media
      </button>

      <button
        className='nav-link'
        id='v-pills-finish-tab'
        data-toggle='pill'
        data-target='#v-pills-finish'
        type='button'
        role='tab'
        aria-controls='v-pills-finish'
        aria-selected='false'
      >
        Finish
      </button>
    </div>
  );
};

export default NavigateForm;
