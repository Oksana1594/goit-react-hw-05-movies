import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '87ac6f2cf8642f95ea875aea3595be38',
    language: 'en-US',
  },
});

export const getMoviesTrending = async () => {
  const { data } = await instance.get('/trending/movie/day?page=1');

  return data.results;
};

export const getSearchMovies = async query => {
  const { data } = await instance.get(
    `search/movie?query=${query}&page=1&include_adult=false`
  );
  return data.results;
};

export const getMovieDetails = async id => {
  const { data } = await instance.get(`/movie/${id}`);
  return data;
};

export const getMoviesCast = async id => {
  const { data } = await instance.get(`/movie/${id}/credits`);
  return data.cast;
};
export const getMoviesReviews = async id => {
  const { data } = await instance.get(`/movie/${id}/reviews?page=1`);
  return data.results;
};
