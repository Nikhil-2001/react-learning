import classes from './MainNavigation.module.css';
import { NavLink } from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined} end>Home</NavLink>
          </li>
          <li>
            <NavLink to='/events'  className={({isActive}) => isActive ? classes.active : undefined} end>Events</NavLink>
          </li>
          <li>
            <NavLink to='/newsletter'  className={({isActive}) => isActive ? classes.active : undefined} end>Newsletter</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
