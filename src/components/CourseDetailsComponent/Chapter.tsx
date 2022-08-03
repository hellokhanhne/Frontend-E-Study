import React from 'react';
import { IChapter, ICourse } from '~/interface/course.interface';
import Lession from './Lession';

const Chapter = ({
  chapter,
  course,
  uniq,
}: {
  chapter: IChapter;
  course: ICourse;
  uniq: string;
}) => {
  return (
    <div className='card'>
      <div id={`#collapse${chapter.id}${uniq}`} className='card-header bg-white shadow-sm border-0'>
        <h6 className='mb-0 accordion_title'>
          <a
            href='#'
            data-toggle='collapse'
            data-target={`#collapse${chapter.id}${uniq}`}
            aria-expanded='true'
            aria-controls={`collapse${chapter.id}${uniq}`}
            className='d-block position-relative text-dark collapsible-link py-2'
          >
            {chapter.name}
          </a>
        </h6>
      </div>
      <div
        id={`collapse${chapter.id}${uniq}`}
        aria-labelledby={`#collapse${chapter.id}${uniq}`}
        data-parent='#accordionExample'
        className={`collapse ${chapter.id === 1 ? 'show' : ''}`}
      >
        <div className='card-body pl-3 pr-3'>
          <ul className='lectures_lists'>
            {chapter.list_lession.map((l) => (
              <Lession course={course} key={l.id} lession={l} />
            ))}
            {/* <li className='complete'>
              <div className='lectures_lists_title'>
                <i className='fas fa-check dios' />
              </div>
              Web Designing Beginner<span className='cls_timing'>40:20</span>
            </li>
           
            <li className='unview'>
              <div className='lectures_lists_title'>
                <i className='fa fa-lock dios lock' />
              </div>
              How To Call Google Map iFrame<span className='cls_timing'>32:10</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Chapter;
