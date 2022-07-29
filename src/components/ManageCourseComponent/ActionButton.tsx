import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useAppDispatch } from '~/store/hooks';
import { deleteCourse } from '~/store/reducers/courseReducer';

interface IActionButtonProps {
  id: number;
}

const ActionButton = ({ id }: IActionButtonProps) => {
  const dispatch = useAppDispatch();
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
        dispatch(deleteCourse(id));
        Swal.fire('Deleted!', 'Your course has been deleted.', 'success');
      }
    });
  };
  return (
    <div className='card-action-button'>
      <div>
        <Link to={`/manage/course/update/${id}`}>
          <img src='/assets/img/pencil.svg' alt='' />
        </Link>
      </div>
      <div onClick={handleDelete}>
        <img src='/assets/img/trash.svg' alt='' />
      </div>
    </div>
  );
};

export default ActionButton;
