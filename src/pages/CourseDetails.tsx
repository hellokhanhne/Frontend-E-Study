import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
import ReviewConextProvider from '~/components/CourseDetailsComponent/context/ReviewContext';
import { ICourse } from '~/interface';
import { changeVideoOverlayState } from '~/store/reducers/courseOverlayReducer';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState<ICourse | null>(null);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const res = await courseApi.getOne(Number(id));
      const { data } = res.data;
      setCourse(data);
    })();
  }, []);

  useEffect(() => {
    course &&
      dispatch(
        changeVideoOverlayState({
          course,
        }),
      );
  }, [course]);

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
              <ReviewConextProvider idCourse={Number(id)}>
                <RenderReview />
              </ReviewConextProvider>
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
