import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '~/store/hooks';
import { categorySelector, getAllCategory } from '~/store/reducers/categoryReducer';
import CategoryCard from './CategoryCard';

const ExporeCategory = () => {
  const dispatch = useAppDispatch();

  const { categories } = useAppSelector(categorySelector);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  return (
    <div>
      <section className='min gray'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-7 col-md-8'>
              <div className='sec-heading center'>
                <h2>
                  Explore Featured <span className='theme-cl'>Categories</span>
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
          <div className='row justify-content-center'>
            {/* Single Category */}

            {categories.map((c) => (
              <CategoryCard category={c} key={c.id} />
            ))}
          </div>
        </div>
      </section>
      <div className='clearfix' />
    </div>
  );
};

export default ExporeCategory;
