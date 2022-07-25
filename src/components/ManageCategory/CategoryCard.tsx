import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { ICategory } from '~/interface';
import { useAppDispatch } from '~/store/hooks';
import { deleteCategory } from '~/store/reducers/categoryReducer';

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
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
        dispatch(deleteCategory(category.id));
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
      }
    });
  };

  return (
    <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
      <div className='dash_crs_cat'>
        <a href='#' className='remove_tools' onClick={handleDelete}>
          <i className='fas fa-trash-alt'></i>
        </a>
        <div className='dash_crs_cat_thumb text-center py-2'>
          <img src={category.avatar} alt='' className='img-fluid' />
        </div>
        <div className='dash_crs_cat_caption'>
          <div className='dash_crs_cat_head'>
            <h4>{category.name}</h4>
            <span>{category.description}</span>
          </div>
          <div className='dash_crs_cat_body'></div>
          <div className='dash_crs_cat_bottom'>
            <Link
              to={`/manage/category/${category.id}`}
              className='btn full-width theme-bg-light theme-cl'
            >
              Edit Category
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
