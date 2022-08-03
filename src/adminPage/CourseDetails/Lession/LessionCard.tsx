import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { ILession } from '~/interface/course.interface';
import { objectToFormdata } from '~/utils/formdataUtils';
import { CourseDetailsContext, ICourseDetailsContext } from '../context/CourseDetailsContext';
import LessionForm from './LessionForm';

const LessionCard = ({ l, chapter_id }: { l: ILession; chapter_id: number }) => {
  const { updateLession, deleteLession } = useContext(
    CourseDetailsContext,
  ) as ICourseDetailsContext;

  const [isEdit, setisEdit] = useState(false);

  const handleSubmit = (values: any) => {
    // console.log(values);
    const payload = objectToFormdata(values);
    updateLession(l.id, payload, chapter_id);
    setisEdit(false);
  };

  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteLession(l.id, chapter_id);
      }
    });
  };
  return (
    <>
      {isEdit ? (
        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
          <LessionForm
            titleButton='Save lession'
            initState={{
              content: l.content,
            }}
            onSubmit={handleSubmit}
            onCancel={() => setisEdit(false)}
          />
        </div>
      ) : (
        <div className='col-xl-4 col-lg-6 col-md-6 col-sm-12'>
          <div className='dash_crs_cat'>
            <a href='#' className='remove_tools' onClick={handleDelete}>
              <i className='fas fa-trash-alt'></i>
            </a>
            <a
              href='#'
              onClick={() => setisEdit(true)}
              className='remove_tools'
              style={{
                right: 60,
                background: 'orange',
              }}
            >
              <i className='fas fa-pencil-alt'></i>
            </a>
            <div className='dash_crs_cat_thumb text-center py-2'>
              <video controls className='contain w-100'>
                <source src={l.attachment} type='video/mp4' />
              </video>
            </div>
            <div className='dash_crs_cat_caption'>
              <div className='dash_crs_cat_head'>
                <h4>{l.content}</h4>
                {/* <span>ankadaldnand</span>    */}
              </div>
              <div className='dash_crs_cat_body'></div>
              <div className='dash_crs_cat_bottom'>
                {/* <Link
      to={`/manage/category/${category.id}`}
      className='btn full-width theme-bg-light theme-cl'
    > */}
                <button className='btn full-width theme-bg-light theme-cl'>Edit Lession</button>

                {/* </Link> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LessionCard;
