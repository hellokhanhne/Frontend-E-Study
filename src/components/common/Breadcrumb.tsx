import React from 'react';

const Breadcrumb = ({
  title1 = 'Home',
  title2,
  to = '/',
}: {
  title1?: string;
  title2: string;
  to?: string;
}) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item'>
          <a href={to}>{title1}</a>
        </li>
        <li className='breadcrumb-item active' aria-current='page'>
          {title2}
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumb;
