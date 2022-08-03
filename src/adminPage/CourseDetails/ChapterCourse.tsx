import React from 'react';
import { ICourse } from '~/interface';
import { objectToFormdata } from '~/utils/formdataUtils';
import ChapterForm from './Chapter/ChapterForm';
import ChapterCard from './Chapter/ChapterCard';

interface IChapterCourseProps {
  course: ICourse;
  selectedChapter: number | null;
  createChapter: any;
  setSelectedChapter: React.Dispatch<React.SetStateAction<number | null>>;
}

const ChapterCourse = ({
  course,
  selectedChapter,
  setSelectedChapter,
  createChapter,
}: IChapterCourseProps) => {
  const handleAddChapter = (values: any) => {
    const payload = objectToFormdata(values);
    payload.append('course_id', course.id.toString());
    createChapter(payload);
  };
  return (
    <div className='chappter-wrapper'>
      <div className='list-group'>
        {course?.chapters.map((c) => (
          <ChapterCard
            key={c.id}
            selectedChapter={selectedChapter}
            setSelectedChapter={setSelectedChapter}
            c={c}
          />
        ))}
        <div className='pt-4 mt-4 border-top'>
          <ChapterForm
            resetAfterSubmit={true}
            onSubmit={handleAddChapter}
            titleButton='Create new chapter'
          />
        </div>
      </div>
    </div>
  );
};

export default ChapterCourse;
