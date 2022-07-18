import React from 'react';

const SubmitReview = () => {
  return (
    <div className='edu_wraper'>
      <h4 className='edu_title'>Submit Reviews</h4>
      <div className='review-form-box form-submit'>
        <form>
          <div className='row'>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='form-group'>
                <label>Name</label>
                <input className='form-control' type='text' placeholder='Your Name' />
              </div>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-12'>
              <div className='form-group'>
                <label>Email</label>
                <input className='form-control' type='email' placeholder='Your Email' />
              </div>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='form-group'>
                <label>Review</label>
                <textarea className='form-control ht-140' placeholder='Review' defaultValue={''} />
              </div>
            </div>
            <div className='col-lg-12 col-md-12 col-sm-12'>
              <div className='form-group'>
                <button type='submit' className='btn theme-bg btn-md'>
                  Submit Review
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitReview;
