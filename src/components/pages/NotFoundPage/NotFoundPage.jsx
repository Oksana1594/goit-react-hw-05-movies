import { Link } from 'react-router-dom';
import css from './not-found-page.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.bg}> 
      <h1 className={css.text}>Not found page</h1>
      <Link  to="/" className={css.link}>
        To Home Page
      </Link>
    </div>
  );
};

export default NotFoundPage;
