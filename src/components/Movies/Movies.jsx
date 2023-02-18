import { useState, useEffect } from 'react';
import { getMoviesTrending } from 'components/API/api';
import { Oval } from 'react-loader-spinner';

import MoviesList from 'components/MoviesList/MoviesList';
import Container from 'components/Container/Container';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMoviesTrending();
        setMovie(result);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
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
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
};

export default Movies;
