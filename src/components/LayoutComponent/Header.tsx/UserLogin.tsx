import React from 'react';
import { useNavigate } from 'react-router-dom';

const UserLogin = ({
  avatar = '',
  username = '',
}: {
  avatar: string | undefined;
  username: string | undefined;
}) => {
  const logout = () => {
    localStorage.removeItem('access_token');
    window.location.href = '/login';
  };

  const navigate = useNavigate();

  return (
    <div
      className='d-flex user-logined pointer align-items-center'
      onClick={() =>
        navigate('/manage/profile', {
          replace: true,
        })
      }
    >
      <img src={avatar} alt='' />
      <span className='text-white'>{username}</span>
      <i className='fas fa-sign-out-alt mr-1' onClick={logout}></i>
    </div>
  );
};

export default UserLogin;
