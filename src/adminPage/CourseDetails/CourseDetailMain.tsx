import { useContext, useEffect } from 'react';
import Breadcrumb from '~/components/common/Breadcrumb';
import ChapterCourse from './ChapterCourse';
import { CourseDetailsContext, ICourseDetailsContext } from './context/CourseDetailsContext';
import LessionCourse from './LessionCourse';
const CourseDetailMain = ({ id }: { id: string }) => {
  const {
    getCourse,
    state: { course },
    selectedChapter,
    createChapter,
    setSelectedChapter,
  } = useContext(CourseDetailsContext) as ICourseDetailsContext;

  useEffect(() => {
    getCourse(Number(id));
  }, []);
  return (
    <>
      <Breadcrumb title2='Manage details course' />
      <div className='dashboard_wrap'>
        <div className='row'>
          <div className='col-3'>
            <ChapterCourse
              createChapter={createChapter}
              selectedChapter={selectedChapter}
              setSelectedChapter={setSelectedChapter}
              course={course!}
            />
          </div>
          <div className='col-9'>
            <LessionCourse course={course!} selectedChapter={selectedChapter} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailMain;
