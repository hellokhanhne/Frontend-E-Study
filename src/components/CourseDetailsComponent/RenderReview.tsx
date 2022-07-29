import { useContext } from 'react';
import { IReviewContext, ReviewContext } from './context';
import ReviewCourse from './ReviewCourse';
import SubmitReview from './SubmitReview';

const RenderReview = () => {
  const { createReview, reviews, setPage, totalPages, idCourse, loading, page, totalElements } =
    useContext(ReviewContext) as IReviewContext;

  return (
    <>
      {/* Reviews */}
      <ReviewCourse
        totalElements={totalElements}
        page={page}
        totalPages={totalPages}
        reviews={reviews}
        setPage={setPage}
        loading={loading}
      />
      {/* Submit Reviews */}
      <SubmitReview idCourse={idCourse} createReview={createReview} />
    </>
  );
};

export default RenderReview;
