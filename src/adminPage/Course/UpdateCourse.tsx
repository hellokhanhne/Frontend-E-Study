import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import courseApi from '~/api/CourseApi';
import Breadcrumb from '~/components/common/Breadcrumb';
import { CourseForm } from '~/components/ManageCourseComponent';
import { ICourse } from '~/interface/course.interface';
import { useAppDispatch } from '~/store/hooks';
import { updateCourse } from '~/store/reducers/courseReducer';
import { objectToFormdata } from '~/utils/formdataUtils';

const UpdateCourse = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<any | ICourse>({
    name: '',
    description: '',
    price: '',
    sale_percent: '',
    short_desc: '',
    categoryId: '',
    imageUrl: '',
  });

  const dispatch = useAppDispatch();
  const handleSubmit = async (values: any) => {
    if (!values.image) {
      delete values.image;
    }
    const formdata = objectToFormdata(values);
    dispatch(
      updateCourse({
        id: Number(id),
        payload: formdata,
      }),
    );
  };

  useEffect(() => {
    (async () => {
      try {
        const res = await courseApi.getOne(Number(id));
        const { data } = res.data;
        const { name, description, price, sale_percent, short_desc, imageUrl } = data;
        setCourse({
          name,
          description,
          price,
          sale_percent,
          short_desc,
          imageUrl,
          categoryId: data.category.id,
        });
      } catch (error) {}
    })();
  }, []);

  return (
    <>
      <Breadcrumb title2='Course Category' />
      <div className='dashboard_wrap'>
        <div className='form_blocs_wrap'>
          <CourseForm onSubmit={handleSubmit} initValue={course} />
        </div>
      </div>
    </>
  );
};

export default UpdateCourse;
