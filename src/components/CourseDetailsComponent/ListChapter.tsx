import { ICourse } from '~/interface/course.interface';
import Chapter from './Chapter';

interface IListChaperProps {
  containerClasses?: string;
  uniq?: string;
  course: ICourse;
}

const ListChapter = ({ containerClasses, course, uniq }: IListChaperProps) => {
  return (
    <div className={`edu_wraper ${containerClasses}`}>
      <h4 className='edu_title'>Course Lession Structure</h4>
      <div id='accordionExample' className='accordion shadow circullum'>
        {course?.chapters?.map((c) => (
          <Chapter uniq={uniq || 'under'} course={course} chapter={c} key={c.id} />
        ))}
      </div>
    </div>
  );
};

export default ListChapter;
