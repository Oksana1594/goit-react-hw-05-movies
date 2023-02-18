import Movies from 'components/Movies/Movies';
import Container from 'components/Container/Container';

import css from './home-page.module.css'

const HomePage = () => {
  return (
      <Container>
          <h2 className={css.text}>Trending today</h2>
      <Movies />
    </Container>
  );
};

export default HomePage;
