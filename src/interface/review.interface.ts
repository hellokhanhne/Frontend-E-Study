import { IUser } from './user.interface';

export interface ICreateReview {
  courseId: number;
  content: string;
  start: number;
}

export interface IReview extends ICreateReview {
  user: IUser;
  id: number;
  createAt: string;
}
