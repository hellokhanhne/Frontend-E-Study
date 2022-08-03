import React, { useContext } from 'react';
import { AuthContext, IAuthContext } from '~/context';
import { IReview } from '~/interface';
import { toVnTime } from '~/utils/dateUtils';
import ReviewActionButton from './ReviewActionButton';

interface IReviewCardProps {
  review: IReview;
}

const ReviewCard = ({ review }: IReviewCardProps) => {
  const {
    authState: { isAuthenticate, user },
  } = useContext(AuthContext) as IAuthContext;
  return (
    <div className='reviews-comments-item'>
      <div className='review-comments-avatar'>
        <img src={review?.user?.avatar} className='img-fluid h-100p cover' alt='' />
      </div>
      <div className='reviews-comments-item-text'>
        <h4>
          <a href='#'>{review?.user?.firstName + ' ' + review?.user?.lastName}</a>
          <span className='reviews-comments-item-date'>
            <i className='ti-calendar theme-cl' />
            {toVnTime(review?.createAt)}
          </span>
        </h4>
        <div className='d-flex align-items-center justify-content-between py-2'>
          <div className='listing-rating'>
            {Array.from({ length: 5 })
              .fill(null)
              .map((_, i) => {
                return (
                  <i key={i} className={`fas fa-star ${i + 1 <= review?.start ? 'active' : ''}`} />
                );
              })}
          </div>
          {isAuthenticate && user?.id === review?.user?.id && (
            <ReviewActionButton idReview={review?.id} />
          )}
        </div>
        <div className='clearfix' />
        <p>{review?.content}</p>
        {/* <div className='pull-left reviews-reaction'>
          <a href='#' className='comment-like active'>
            <i className='ti-thumb-up' /> 12
          </a>
          <a href='#' className='comment-dislike active'>
            <i className='ti-thumb-down' /> 1
          </a>
          <a href='#' className='comment-love active'>
            <i className='ti-heart' /> 07
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default ReviewCard;
