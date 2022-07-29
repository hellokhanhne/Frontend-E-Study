interface ICourse {
  id: number;
  name: string;
  description: string;
  price: number;
  sale_percent: number;
  short_desc: string;
  imageUrl: string;
  enrollNumber: number;
  category: {
    id: number;
    name: string;
    avatar: string;
    description: string;
  };
  instructor: {
    id: number;
    firstName: string;
    lastName: string;
    dateCreated: string;
    phone: string;
    email: string;
    address: string;
    avatar: string;
  };
}

export type { ICourse };
