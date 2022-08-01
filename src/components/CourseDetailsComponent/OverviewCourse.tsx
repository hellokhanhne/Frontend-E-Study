import React from 'react';
import ListChapter from './ListChapter';
import { ICourseCommonProps } from './props.common.interface';

const OverviewCourse = ({ course }: ICourseCommonProps) => {
  return (
    <>
      <div className='edu_wraper'>
        <div dangerouslySetInnerHTML={{ __html: course?.description }}></div>
      </div>
      <ListChapter />
    </>
  );
};

export default OverviewCourse;
