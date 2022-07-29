import React from 'react';
import { ICategory } from '~/interface';

interface ICategoryCardProps {
  category: ICategory;
}

const CategoryCard = ({ category }: ICategoryCardProps) => {
  return (
    <div className='col-xl-3 col-lg-4 col-md-4 col-sm-6'>
      <div className='crs_cate_wrap style_2'>
        <a href='grid-layout-with-sidebar.html' className='crs_cate_box'>
          <div className='crs_cate_icon'>
            <img
              src={category.avatar}
              style={{
                width: 50,
                height: 50,
              }}
            />
          </div>
          <div className='crs_cate_caption'>
            <span>{category.name}</span>
          </div>
          {/* <div className='crs_cate_count'>
          <span>22 Lectures</span>
        </div> */}
        </a>
      </div>
    </div>
  );
};

export default CategoryCard;
