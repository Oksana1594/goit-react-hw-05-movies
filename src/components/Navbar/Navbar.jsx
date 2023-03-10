import items from '../items';
import { NavLink } from 'react-router-dom';
import css from './navbar.module.css';

const Navbar = () => {
  const element = items.map(({ id, text, link }) => (
    <li key={id}>
      <NavLink className={css.link} to={link}>
        {text}
      </NavLink>
    </li>
  ));

  return <ul className={css.menu}>{element}</ul>;
};

export default Navbar;
