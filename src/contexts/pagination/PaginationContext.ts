import { createContext } from 'react';

type ContextProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

export const DEFAULT_VALUE = {
  page: 1,
  setPage: () => {},
};

export const PaginationContext = createContext<ContextProps>(DEFAULT_VALUE);
