import { useParams } from 'react-router-dom';
import CourseDetailsContextProvider from './context/CourseDetailsContext';
import CourseDetailMain from './CourseDetailMain';

const CourseDetailsManage = () => {
  const { id } = useParams();
  return (
    <CourseDetailsContextProvider>
      <CourseDetailMain id={id!} />
    </CourseDetailsContextProvider>
  );
};

export default CourseDetailsManage;
