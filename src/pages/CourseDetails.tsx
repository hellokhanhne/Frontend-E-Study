import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import courseApi from '~/api/CourseApi';
import {
  Instructor,
  OverviewCourse,
  PageTitle,
  Rating,
  RenderReview,
  Sidebar,
} from '~/components/CourseDetailsComponent';
import { ICourse } from '~/interface';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourse | null>(null);

  useEffect(() => {
    (async () => {
      const res = await courseApi.getOne(Number(id));
      const { data } = res.data;
      setCourse(data);
    })();
  }, []);

  return (
    <div>
      {/* ============================ Page Title Start================================== */}
      <PageTitle course={course!} />
      {/* ============================ Page Title End ================================== */}
      {/* ============================ Course Detail ================================== */}
      <section className='gray'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12 order-lg-first'>
              {/* Overview */}
              <OverviewCourse course={course!} />
              {/* Rating */}
              <Rating />
              {/* instructor */}
              <Instructor course={course!} />
              <RenderReview />
            </div>
            {/* Sidebar */}
            <Sidebar course={course!} />
          </div>
        </div>
      </section>
      {/* ============================ Course Detail ================================== */}
    </div>
  );
};

export default CourseDetails;
