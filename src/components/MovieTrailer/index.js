import './style.css';
import YouTube from 'react-youtube';
import Loading from '../Loading';

const MovieTrailer = ({ trailer, trailerLoading }) => {
  return (
    <div className="movie-trailer">
      {trailerLoading && <Loading />}
      {!trailerLoading && trailer && trailer.results.length > 0 &&
        <YouTube
          videoId={trailer.results[0].key}
          className={"movie-trailer__youtube"}
          opts={
            {
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
            }
          }
        />}
      {trailer && 
        trailer.results.length === 0 && 
          <h3 className="no-trailer">Desculpe... Sem Trailer para o Filme</h3>}
    </div>
  )
}

export default MovieTrailer;