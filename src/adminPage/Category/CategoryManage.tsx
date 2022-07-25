import React, { useEffect } from 'react';
import Breadcrumb from '~/components/common/Breadcrumb';
import { CategoryForm } from '~/components/ManageCategory';
import CategoryCard from '~/components/ManageCategory/CategoryCard';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { categorySelector, createCategory, getAllCategory } from '~/store/reducers/categoryReducer';

const CategoryManage = () => {
  const { categories } = useAppSelector(categorySelector);
  const dispatch = useAppDispatch();
  const handleAddCategory = async (values: any) => {
    const formdata = new FormData();
    formdata.append('name', values.name);
    formdata.append('description', values.description);

    formdata.append('avatar', values.avatar);

    dispatch(createCategory(formdata));
  };

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <>
      {/* Row */}
      <div className='row justify-content-between'>
        <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>
          <div className='dashboard_wrap d-flex align-items-center justify-content-between'>
            <div className='arion'>
              <Breadcrumb title2='Course Category' />
            </div>
            <div className='elkios'>
              <a href='#' className='add_new_btn' data-toggle='modal' data-target='#catModal'>
                <i className='fas fa-plus-circle mr-1' />
                Add New Category
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* /Row */}
      <div className='row'>
        {/* render list category  */}
        {categories.map((c) => (
          <CategoryCard category={c} key={c.id} />
        ))}
      </div>

      {/* Modal */}
      <div
        className='modal'
        id='catModal'
        tabIndex={-1}
        role='dialog'
        aria-labelledby='catModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Add Category Form</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>
                  <i className='fas fa-times-circle' />
                </span>
              </button>
            </div>
            <div className='modal-body'>
              <CategoryForm typeForm='create' onSubmit={handleAddCategory} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryManage;
