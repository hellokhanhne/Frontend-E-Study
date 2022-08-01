import Plyr from 'plyr-react';
import React from 'react';
import { ListChapter } from '../CourseDetailsComponent';
import 'plyr-react/plyr.css';

const VideoCourseOverlay = () => {
  return (
    <div className='video-course-overlay'>
      <div className='row h-100p'>
        <div className='flex-1'>
          <div className='video-wrapper'>
            <Plyr
              source={{
                type: 'video',
                sources: [
                  {
                    src: 'https://res.cloudinary.com/wonder-place/video/upload/v1659326697/video%20course/Welcome_to_new_JavaScript_course_mjfpgp.mp4',
                  },
                ],
              }}
              options={undefined}
            />
          </div>
        </div>
        <div>
          <ListChapter containerClasses='wrapper' />
        </div>
      </div>
    </div>
  );
};

export default VideoCourseOverlay;
