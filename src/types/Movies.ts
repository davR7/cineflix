import { MovieProps } from './Movie';

export type MoviesProps = {
  page: number;
  results: MovieProps[];
  total_pages: number;
  total_results: number;
};
