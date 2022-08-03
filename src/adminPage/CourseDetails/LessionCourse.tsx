import React, { useContext } from 'react';
import { ICourse } from '~/interface';
import { objectToFormdata } from '~/utils/formdataUtils';
import { CourseDetailsContext, ICourseDetailsContext } from './context/CourseDetailsContext';
import LessionCard from './Lession/LessionCard';
import LessionForm from './Lession/LessionForm';

const LessionCourse = ({
  course,
  selectedChapter,
}: {
  course: ICourse;
  selectedChapter: number | null;
}) => {
  const { createLession } = useContext(CourseDetailsContext) as ICourseDetailsContext;
  const handleAddLession = (values: any) => {
    const payload = objectToFormdata(values);
    payload.append('chapter_id', selectedChapter?.toString()!);
    createLession(payload, selectedChapter!);
  };
  return (
    <div>
      <div className='row'>
        {course?.chapters
          .find((c) => c.id === Number(selectedChapter))
          ?.list_lession.map((l) => (
            <LessionCard chapter_id={selectedChapter!} l={l} key={l.id} />
          ))}

        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
          <div className='dash_crs_cat'>
            <LessionForm
              resetAfterSubmit={true}
              onSubmit={handleAddLession}
              titleButton='Create new lession'
              typeForm='create'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessionCourse;
