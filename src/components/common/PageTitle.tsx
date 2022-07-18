import React from 'react';

const PageTitle = ({ page, title }: { title: string; page: string }) => {
  return (
    <section className='page-title gray'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <div className='breadcrumbs-wrap'>
              <h1 className='breadcrumb-title'>{title}</h1>
              <nav className='transparent'>
                <ol className='breadcrumb p-0'>
                  <li className='breadcrumb-item'>
                    <a href='#'>Home</a>
                  </li>
                  <li className='breadcrumb-item active theme-cl' aria-current='page'>
                    {page}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageTitle;
