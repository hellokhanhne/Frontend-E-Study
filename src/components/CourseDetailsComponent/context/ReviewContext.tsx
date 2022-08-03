import React, { createContext, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import commentApi from '~/api/commentApi';
import { AuthContext, IAuthContext } from '~/context';

import { IReview } from '~/interface';
import { changeLoading } from '~/store/reducers/loadingOverlayReducer';
import { toastEmit } from '~/utils/toasify';

interface IInitState {
  reviews: IReview[];
  loading: boolean;
  totalPages: number;
  totalElements: number;
}

export interface IReviewContext {
  reviews: IReview[];
  totalPages: number;

  totalElements: number;
  loading: boolean;
  createReview: (data: FormData) => Promise<void>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  deleteReview: (id: number) => Promise<void>;
  idCourse: number;
}

export const ReviewContext = createContext<IReviewContext | null>(null);

const limit = 5;

const ReviewConextProvider = ({
  children,
  idCourse,
}: {
  children: React.ReactNode;
  idCourse: number;
}) => {
  const {
    authState: { user, isAuthenticate },
  } = useContext(AuthContext) as IAuthContext;
  const [reviewSate, setReviewState] = useState<IInitState>({
    loading: false,
    reviews: [],
    totalPages: 0,
    totalElements: 0,
  });

  const dispatchRedux = useDispatch();

  const [page, setPage] = useState(1);

  const getReviews = async () => {
    try {
      setReviewState({
        ...reviewSate,
        loading: true,
      });
      const res = await commentApi.getByCourse(idCourse, limit, page);
      const { data } = res.data;
      setReviewState({
        ...reviewSate,
        reviews: [...reviewSate.reviews, ...(data.content || [])],
        totalPages: data.totalPages,
        totalElements: data.totalElements,
        loading: false,
      });
    } catch (error) {
      setReviewState({
        ...reviewSate,
        loading: false,
      });
    }
  };

  useEffect(() => {
    getReviews();
  }, [page]);

  const createReview = async (payload: FormData) => {
    try {
      if (!isAuthenticate) {
        return toastEmit({
          message: 'Please login to review !',
          type: 'error',
        });
      }
      dispatchRedux(changeLoading(true));
      const res = await commentApi.create(payload);
      const { data } = res.data;
      dispatchRedux(changeLoading(true));
      setReviewState({
        ...reviewSate,
        totalPages: Math.ceil((reviewSate.totalElements + 1) / limit),
        totalElements: reviewSate.totalElements + 1,
        reviews: [
          {
            ...data,
            user,
          },
          ...reviewSate.reviews,
        ],
      });
    } catch (error) {}
  };

  const deleteReview = async (id: number) => {
    try {
      await commentApi.delete(id);
      setReviewState({
        ...reviewSate,
        totalPages: Math.ceil((reviewSate.totalElements - 1) / limit),
        reviews: reviewSate.reviews.filter((r) => r.id !== id),
        totalElements: reviewSate.totalElements - 1,
      });
    } catch (error) {}
  };

  const value = {
    reviews: reviewSate.reviews,
    totalPages: reviewSate.totalPages,
    loading: reviewSate.loading,
    createReview,
    setPage,
    page,
    deleteReview,

    idCourse,
    totalElements: reviewSate.totalElements,
  };

  return <ReviewContext.Provider value={value}>{children}</ReviewContext.Provider>;
};

export default ReviewConextProvider;
