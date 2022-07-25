import React from 'react';
import AdminSideBar from '~/components/LayoutComponent/AdminSideBar';
import BaseLayout from './BaseLayout';

const AdminLayout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <BaseLayout>
      <section className='gray pt-4'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-3 col-md-3'>
              <AdminSideBar />
            </div>
            <div className='col-lg-9 col-md-9 col-sm-12'>
              {/* Row */}
              <div className='row'>
                <div className='col-lg-12 col-md-12 col-sm-12 pb-4'>{children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </BaseLayout>
  );
};

export default AdminLayout;
