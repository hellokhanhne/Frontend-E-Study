import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { objectToFormdata } from '~/utils/formdataUtils';
import ChapterForm from './ChapterForm';
import { CourseDetailsContext, ICourseDetailsContext } from '../context/CourseDetailsContext';

const ChapterCard = ({ selectedChapter, setSelectedChapter, c }: any) => {
  const [isEdit, setisEdit] = useState(false);
  const { updateChapter, deleteChapter } = useContext(
    CourseDetailsContext,
  ) as ICourseDetailsContext;
  const handleSubmit = (values: any) => {
    const payload = objectToFormdata(values);
    updateChapter(c.id, payload);
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
        deleteChapter(c.id);
        Swal.fire('Deleted!', 'Your chapter has been deleted.', 'success');
      }
    });
  };

  return (
    <>
      {isEdit ? (
        <div className='position-relative py-3'>
          <ChapterForm
            onSubmit={handleSubmit}
            titleButton='Save chapter'
            onCancel={() => setisEdit(false)}
            initState={{
              name: c.name,
              description: c.description,
            }}
          />
        </div>
      ) : (
        <div
          className={`list-group-item list-group-item-action position-relative chapter-card ${
            selectedChapter === c.id ? 'active' : ''
          }`}
          onClick={() => setSelectedChapter(c.id)}
        >
          {c.name}
          <div className='card-action-button'>
            <div>
              <img onClick={() => setisEdit(true)} src='/assets/img/pencil.svg' alt='' />
            </div>
            <div>
              <img onClick={handleDelete} src='/assets/img/trash.svg' alt='' />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChapterCard;
