import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import MovieSearchForm from 'components/MovieSearchForm/MovieSearchForm';
import { getSearchMovies } from 'components/API/api';
import MoviesList from 'components/MoviesList/MoviesList';
import Container from 'components/Container/Container';
import { Oval } from 'react-loader-spinner';

const SearchMoviePage = () => {
  const [state, setState] = useState({
    movies: [],
    loading: false,
    error: null,
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setState(prevState => ({
          ...prevState,
          loading: true,
        }));
        const result = await getSearchMovies(search);
        setState(prevState => ({
          ...prevState,
          movies: result,
        }));
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error,
        }));
      } finally {
        setState(prevState => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    if (search) {
      fetchMovie();
    }
  }, [search]);

  const changeSearch = ({ search }) => {
    setSearchParams({ search });
  };

  const { movies, loading, error } = state;

  return (
    <Container>
      <MovieSearchForm onSubmit={changeSearch} />
      {movies.length > 0 && <MoviesList movies={movies} />}
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
      {error && <p>..Error</p>}
    </Container>
  );
};

export default SearchMoviePage;
