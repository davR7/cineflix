import './style.css';
import Loading from '../Loading';
import YouTube from 'react-youtube';
import { VideoProps } from '../../types/MovieDetails';

type TrailersProps = {
  trailers: VideoProps[];
  trailerLoading: boolean;
};

const MovieTrailer: React.FC<TrailersProps> = ({
  trailers,
  trailerLoading,
}) => {
  return (
    <div className="movie-trailer">
      {trailerLoading && <Loading />}
      {!trailerLoading && trailers && trailers.length > 0 && (
        <YouTube
          videoId={trailers[0].key}
          className={'movie-trailer__youtube'}
          opts={{
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 0,
              controls: 0,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }}
        />
      )}
      {trailers && trailers.length === 0 && (
        <h3 className="no-trailer">Desculpe... Sem Trailer para o Filme</h3>
      )}
    </div>
  );
};

export default MovieTrailer;
