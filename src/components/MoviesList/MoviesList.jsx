import { Link, useLocation } from 'react-router-dom';
import css from './movies-list.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={css.list}>
      {movies.map(({ id, title }) => (
        <li className={css.item} key={id}>
          <Link
            className={css.link}
            state={{ from: location }}
            to={`/movies/${id}`}
          >
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MoviesList;

MoviesList.defaultProps = {
  movies: [],
};
