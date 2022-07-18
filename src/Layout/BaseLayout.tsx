import React from 'react';
import ScrollToTop from '~/components/common/ScrollToTop';
import { Footer, Header } from '~/components/LayoutComponent';

interface IProps {
  children: React.ReactNode;
}

const BaseLayout = ({ children }: IProps) => {
  return (
    <div id='main-wrapper'>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default BaseLayout;
