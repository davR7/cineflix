import { PaginationContext } from '../contexts/pagination/PaginationContext';
import { useContext } from 'react';

export const usePage = () => {
  const page = useContext(PaginationContext);
  return page;
};
