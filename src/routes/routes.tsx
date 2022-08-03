import CategoryManage from '~/adminPage/Category/CategoryManage';
import UpdateCategory from '~/adminPage/Category/UpdateCategory';
import CreateCourse from '~/adminPage/Course/CreateCourse';
import ManageCourse from '~/adminPage/Course/ManageCourse';
import UpdateCourse from '~/adminPage/Course/UpdateCourse';
import { CourseDetailsManage } from '~/adminPage/CourseDetails';

import Profile from '~/adminPage/Profile';
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
    path: '/manage/profile',
    element: <Profile />,
  },
  {
    path: '/manage/category',
    element: <CategoryManage />,
  },
  {
    path: '/manage/category/:id',
    element: <UpdateCategory />,
  },
  {
    path: '/manage/course',
    element: <ManageCourse />,
  },
  {
    path: '/manage/course/create',
    element: <CreateCourse />,
  },
  {
    path: '/manage/course/update/:id',
    element: <UpdateCourse />,
  },
  {
    path: '/manage/courses/:id',
    element: <CourseDetailsManage />,
  },
];
