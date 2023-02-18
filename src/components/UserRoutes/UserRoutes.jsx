import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Oval } from 'react-loader-spinner';

const HomePage = lazy(() => import('components/pages/Home/HomePage'));
const SearchMoviePage = lazy(() =>
  import('components/pages/SearchMovies/SearchMoviesPage')
);
const NotFoundPage = lazy(() =>
  import('components/pages/NotFoundPage/NotFoundPage')
);
const SingleMoviePage = lazy(() =>
  import('components/pages/SingleMoviePage/SingleMoviePage')
);
const CastPage = lazy(() => import('components/pages/Cast/CastPage'));
const ReviewsPage = lazy(() => import('components/pages/Reviews/ReviewsPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Oval height={80}
  width={80}
  color="#4fa94d"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#4fa94d"
  strokeWidth={2}
  strokeWidthSecondary={2}/>}>
       <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<SearchMoviePage />} />
      <Route path="/movies/:movieId" element={<SingleMoviePage />}>
        <Route path="cast" element={<CastPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </Suspense>
   
  );
};

export default UserRoutes;
