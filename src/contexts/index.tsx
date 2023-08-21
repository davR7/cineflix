import { PaginationProvider } from './pagination/PaginationProvider';

type ProviderProps = {
  children: React.ReactNode;
};

export const GlobalProvider: React.FC<ProviderProps> = ({ children }) => {
  return <PaginationProvider>{children}</PaginationProvider>;
};
