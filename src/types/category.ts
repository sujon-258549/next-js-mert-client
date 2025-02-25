/* eslint-disable @typescript-eslint/no-explicit-any */
export type Pagination = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type Category = {
  _id: string;
  name: string;
  slug?: string;
  description: string;
  icon?: string;
  parent?: string | null;
  isActive?: boolean;
  createdAt: string;
  updatedAt: string;
  createdBy?: string;
};

export type TCategoryData = {
  [x: string]: any;
  data: Category[];
  meta: Pagination;
};
