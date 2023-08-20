type Collection = {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
};

type Genres = {
  id: number;
  name: string;
};

type ProdCompanies = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

type ProdCountries = {
  iso_3166_1: string;
  name: string;
};

type SpokenLanguages = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type VideoProps = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: number;
  official: number;
  published_at: string;
  id: string;
};

export type MovieDetailsProps = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: Collection;
  budget: number;
  genres: Genres[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: string;
  poster_path: string;
  production_companies: ProdCompanies;
  production_countries: ProdCountries;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguages[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  videos: {
    results: VideoProps[];
  };
};
