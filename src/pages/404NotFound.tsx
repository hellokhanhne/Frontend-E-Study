import React from 'react';
import NotFound from '~/components/common/NotFound';
import { Question } from '~/components/HomeComponent';

const NotFoundPage = () => {
  return (
    <div>
      <NotFound />
      <Question />
    </div>
  );
};

export default NotFoundPage;
