import { ICategory } from './category.interface';
import { IUser } from './user.interface';

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
}

export type { ICourse };
