import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'components/API/api';
import { Oval } from 'react-loader-spinner';

import css from './cast-page.module.css';

const CastPage = () => {
  const [casts, setCasts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const result = await getMoviesCast(Number(movieId));
        setCasts(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [movieId]);

  return (
    <>
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
      {error && <p>..error</p>}
      {casts.length > 0 && !error && (
        <ul className={css.list}>
          {casts.map(({ id, name, profile_path, character }) => (
            <li className={css.item} key={id}>
              <img
                className={css.img}
                src={
                  profile_path
                    ? 'https://image.tmdb.org/t/p/w500' + profile_path
                    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
                }
                alt={name}
                width={120}
                height={150}
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}

      {casts.length === 0 && !error && (
        <p>We don't have any actors for this movie</p>
      )}
    </>
  );
};

export default CastPage;
