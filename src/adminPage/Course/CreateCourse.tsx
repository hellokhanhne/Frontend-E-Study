import Breadcrumb from '~/components/common/Breadcrumb';
import { CourseForm } from '~/components/ManageCourseComponent';
import { useAppDispatch } from '~/store/hooks';
import { createCourse } from '~/store/reducers/courseReducer';
import { objectToFormdata } from '~/utils/formdataUtils';

const CreateCourse = () => {
  const dispatch = useAppDispatch();
  const handleSubmit = async (values: any) => {
    const formdata = objectToFormdata(values);
    dispatch(createCourse(formdata));
  };
  return (
    <>
      <Breadcrumb title2='Create course' />
      <div className='dashboard_wrap'>
        <div className='form_blocs_wrap'>
          <CourseForm onSubmit={handleSubmit} typeForm='create' />
        </div>
      </div>
    </>
  );
};

export default CreateCourse;
