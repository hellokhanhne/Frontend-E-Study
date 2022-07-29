import { Form, Formik } from 'formik';
import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';
import * as Yup from 'yup';
import { objectToFormdata } from '~/utils/formdataUtils';
import { TextField } from '../Form';

interface ISubmitReviewProps {
  createReview: (data: FormData) => Promise<void>;
  idCourse: number;
}

interface IErrors {
  rating: string | null;
}

const SubmitReview = ({ createReview, idCourse }: ISubmitReviewProps) => {
  const [rating, setRating] = useState<number>(0);

  const [errors, setErrors] = useState<IErrors>({ rating: null });

  const handleOnRating = (value: number) => {
    console.log(value);
    setRating(value / 20);
  };

  const validate = Yup.object({
    content: Yup.string().required('Review content is required !'),
  });

  const handleAddReview = (values: any, { resetForm }: any) => {
    if (!rating) {
      return setErrors({
        rating: 'Please choose the rate star !',
      });
    }
    const payload = {
      content: values.content,
      star: rating,
      courseId: idCourse,
    };
    createReview(objectToFormdata(payload));
    resetForm();
    setRating(0);
  };

  return (
    <div className='edu_wraper'>
      <h4 className='edu_title'>Submit Reviews</h4>
      <div className='review-form-box form-submit'>
        <Formik
          validationSchema={validate}
          initialValues={{
            content: '',
          }}
          onSubmit={handleAddReview}
        >
          {(_) => (
            <Form>
              <div className='row'>
                <div className='col-12 pb-2'>
                  <Rating
                    transition
                    onClick={handleOnRating}
                    ratingValue={rating * 20}
                    showTooltip
                    tooltipArray={['Terrible', 'Bad', 'Average', 'Great', 'Prefect']}
                  />

                  {errors.rating && (
                    <div className='invalid-feedback d-block mb-2 m-0 pl-2'>{errors.rating}</div>
                  )}
                </div>

                <div className='col-lg-12 col-md-12 col-sm-12'>
                  <div className='form-group'>
                    <TextField
                      className='form-control ht-140'
                      name='content'
                      placeholder='Review'
                    />
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SubmitReview;
