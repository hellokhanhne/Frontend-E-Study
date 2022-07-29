import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { IReviewContext, ReviewContext } from './context';

const ReviewActionButton = ({ idReview }: { idReview: number }) => {
  const { deleteReview } = useContext(ReviewContext) as IReviewContext;

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteReview(idReview);
        Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
      }
    });
  };
  return (
    <div className='d-flex '>
      <div className='mr-3'>
        <img className='pointer' src='/assets/img/pencil.svg' alt='' />
      </div>
      <div onClick={handleDelete}>
        <img className='pointer' src='/assets/img/trash.svg' alt='' />
      </div>
    </div>
  );
};

export default ReviewActionButton;
