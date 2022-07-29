import React from 'react';
import { IReview } from '~/interface';
import { Loading } from '../common';
import ReviewCard from './ReviewCard';

interface IReviewCourseProps {
  reviews: IReview[];
  totalPages: number;
  page: number;

  setPage: React.Dispatch<React.SetStateAction<number>>;
  loading: Boolean;
  totalElements: number;
}

const ReviewCourse = ({
  reviews,
  setPage,
  totalPages,
  page,
  loading,
  totalElements,
}: IReviewCourseProps) => {
  return (
    <div className='list-single-main-item fl-wrap'>
      <div className='list-single-main-item-title fl-wrap'>
        <h3>
          Item Reviews - <span> {totalElements} </span>
        </h3>
      </div>
      <div className='reviews-comments-wrap'>
        {reviews.map((r) => (
          <ReviewCard key={r.id} review={r} />
        ))}
        {!loading && page !== totalPages && (
          <div className='text-center'>
            {' '}
            <button type='submit' className='btn theme-bg btn-sm' onClick={() => setPage(page + 1)}>
              Load more reviews
            </button>
          </div>
        )}
        {loading && (
          <div className='text-center pt-3'>
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCourse;
