import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import categoryApi from '~/api/categoryApi';
import { CategoryForm } from '~/components/ManageCategory';
import { ICategory } from '~/interface';
import { useAppDispatch } from '~/store/hooks';
import { updateCategory } from '~/store/reducers/categoryReducer';

const UpdateCategory = () => {
  const { id } = useParams();
  const [category, setCategory] = useState<any | ICategory>({
    avatar: '',
    description: '',
    name: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (values: any) => {
    const formdata = new FormData();
    formdata.append('name', values.name);
    formdata.append('description', values.description);
    if (values.avatar) {
      formdata.append('avatar', values.avatar);
    }
    await dispatch(
      updateCategory({
        id: Number(id),
        payload: formdata,
      }),
    );
    return navigate('/manage/category', {
      replace: true,
    });
  };

  useEffect(() => {
    (async () => {
      const res = await categoryApi.getOne(Number(id));
      const { data } = res.data;
      setCategory(data);
    })();
  }, []);

  return (
    <div>
      <CategoryForm onSubmit={handleSubmit} initValue={category} />
    </div>
  );
};

export default UpdateCategory;
