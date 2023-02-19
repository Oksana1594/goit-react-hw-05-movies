import { useParams, useNavigate, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieDetails } from 'components/API/api';
import { Link } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

import css from './single-movie-page.module.css';

const SingleMoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMovieDetails(Number(movieId));
        setMovie(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <div className={css.card}>
      <button className={css.btn} onClick={goBack} type="button">
        Go back
      </button>
      {movie && (
        <>
          {error && <p>...error</p>}
          {loading && (
            <Oval
              height={80}
              width={80}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          )}
          <div className={css.wrapper}>
            <img
              className={css.img}
              src={
                movie.poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                  : 'https://ik.imagekit.io/tc8jxffbcvf/default-movie-portrait_EmJUj9Tda5wa.jpg?tr=fo-auto,di-'
              }
              alt={movie.title}
              width={300}
            />
            <div>
              <h2 className={css.text}>
                {movie.title ? movie.title : 'There is no title yet'} (
                {new Date(movie.release_date).getFullYear()})
              </h2>
              <p className={css.description}>
                User Score: {movie.vote_average.toFixed(1)}
              </p>
              <h3 className={css.text}>Overview</h3>
              <p className={css.description}>{movie.overview}</p>
              <h3 className={css.text}>Genres</h3>
              <p className={css.description}>
                {movie.genres.map(genre => genre.name).join(', ')}
              </p>
            </div>
          </div>

          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link
                  className={css.next}
                  state={{ from }}
                  to={`/movies/${movieId}/cast`}
                >
                  Cast
                </Link>
              </li>
              <li>
                <Link
                  className={css.next}
                  state={{ from }}
                  to={`/movies/${movieId}/reviews`}
                >
                  Reviews
                </Link>
              </li>
            </ul>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
};

export default SingleMoviePage;
