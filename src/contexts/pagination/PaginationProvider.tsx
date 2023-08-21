import { useState } from 'react';
import { DEFAULT_VALUE, PaginationContext } from './PaginationContext';

type ProviderProps = {
  children: React.ReactNode;
};

export const PaginationProvider: React.FC<ProviderProps> = ({ children }) => {
  const [page, setPage] = useState<number>(DEFAULT_VALUE.page);

  return (
    <PaginationContext.Provider value={{ page, setPage }}>
      {children}
    </PaginationContext.Provider>
  );
};
