import Navbar from './Navbar/Navbar';
import UserRoutes from './UserRoutes/UserRoutes';
import Container from './Container/Container';

export const App = () => {
  return (
    <Container>
      <Navbar />
      <UserRoutes />
    </Container>
  );
};
