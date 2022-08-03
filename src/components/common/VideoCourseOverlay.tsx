import Plyr from 'plyr-react';
import React from 'react';
import { ListChapter } from '../CourseDetailsComponent';
import 'plyr-react/plyr.css';
import { useAppSelector } from '~/store/hooks';
import {
  changeVideoOverlayState,
  courseOverlaySelector,
} from '~/store/reducers/courseOverlayReducer';
import { useDispatch } from 'react-redux';

const VideoCourseOverlay = () => {
  const { course, lessionSelected } = useAppSelector(courseOverlaySelector);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(
      changeVideoOverlayState({
        isShow: false,
      }),
    );
  };
  return (
    <div className='video-course-overlay'>
      <div className='row h-100p'>
        <i className='fa fa-times close pointer' onClick={handleClose} aria-hidden='true'></i>
        <div className='flex-1 pl-4 bg-white pt-3'>
          <div className='video-wrapper'>
            <Plyr
              source={{
                type: 'video',
                sources: [
                  {
                    src: lessionSelected?.attachment || '',
                  },
                ],
              }}
              options={undefined}
            />
          </div>
          <div className='bg-white'>
            <h2 className='ed_title mt-5 px-4'>{course?.name}</h2>
            <div className='edu_wraper'>
              <div dangerouslySetInnerHTML={{ __html: course?.description || '' }}></div>
            </div>
          </div>
        </div>
        <div>
          <ListChapter course={course!} uniq='over' containerClasses='wrapper' />
        </div>
      </div>
    </div>
  );
};

export default VideoCourseOverlay;
