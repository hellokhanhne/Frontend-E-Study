import { ICategory } from './category.interface';
import { IUser } from './user.interface';

interface ILession {
  id: number;
  name: string;
  content: string;
  attachment: string;
  createAt: string;
}

interface IChapter {
  id: number;
  name: string;
  description: string;
  course_id: string;
  list_lession: ILession[];
  createAt: string;
}

interface ICourse {
  id: number;
  name: string;
  description: string;
  price: number;
  sale_percent: number;
  short_desc: string;
  imageUrl: string;
  enrollNumber: number;
  category: ICategory;
  instructor: IUser;
  chapters: IChapter[];
}

export type { ICourse, IChapter, ILession };
