import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ICourse, ILession } from '~/interface/course.interface';
import { changeVideoOverlayState } from '~/store/reducers/courseOverlayReducer';

import { formatVideoTime } from '~/utils/formdataUtils';
type lessionType = 'progressing' | 'unview' | 'complete';

const Lession = ({ lession }: { lession: ILession; course: ICourse }) => {
  const [duration, setDuration] = useState(0);
  const dispatch = useDispatch();

  const handleOnclick = () => {
    dispatch(
      changeVideoOverlayState({
        lessionSelected: lession,
        isShow: true,
      }),
    );
  };

  useEffect(() => {
    let media = new Audio(lession.attachment);
    media.onloadedmetadata = function () {
      setDuration(media.duration);
    };
  }, []);
  return (
    <li className='progressing' onClick={handleOnclick}>
      <div className='lectures_lists_title'>
        <i className='fas fa-play dios' />
      </div>
      {lession.content}
      <span className='cls_timing'>{formatVideoTime(duration)}</span>
    </li>
  );
};

export default Lession;
