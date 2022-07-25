import CategoryManage from '~/adminPage/Category/CategoryManage';
import UpdateCategory from '~/adminPage/Category/UpdateCategory';
import { Home } from '~/pages';
import NotFoundPage from '~/pages/404NotFound';
import About from '~/pages/About';
import Auth from '~/pages/Auth';
import CourseDetails from '~/pages/CourseDetails';
import Courses from '~/pages/Courses';
import { FAQ } from '~/pages/FAQ';

interface IRoute {
  path: string;
  element: JSX.Element;
}

export const publicRoutes: IRoute[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Auth />,
  },
  {
    path: '/register',
    element: <Auth />,
  },
  {
    path: '/forgot-password',
    element: <Auth />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/courses/:id',
    element: <CourseDetails />,
  },

  {
    path: '/faq',
    element: <FAQ />,
  },

  {
    path: '*',
    element: <NotFoundPage />,
  },
];

export const lecturerRoutes: IRoute[] = [
  {
    path: '/dashboard',
    element: <></>,
  },
  {
    path: '/manage/category',
    element: <CategoryManage />,
  },
  {
    path: '/manage/category/:id',
    element: <UpdateCategory />,
  },
];
