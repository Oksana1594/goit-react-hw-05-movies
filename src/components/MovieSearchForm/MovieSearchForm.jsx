import { useState } from 'react';
import PropTypes from 'prop-types';

import css from './movie-search-form.module.css';

const MovieSearchForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    search: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      search: '',
    });
  };

  return (
    <div className={css.wrapper}>
      <form className={css.form} onSubmit={handleSubmit}>
        <button className={css.button} type="submit"></button>
        <input
          className={css.input}
          type="text"
          placeholder="search"
          name="search"
          value={state.search}
          onChange={handleChange}
          required
        />
      </form>
    </div>
  );
};

export default MovieSearchForm;

MovieSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
