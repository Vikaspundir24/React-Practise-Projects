import { useSelector , useDispatch } from 'react-redux';
import { authAction } from '../store/authStore';

import classes from './Header.module.css';

const Header = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const authLogout = useSelector(state => state.auth.isAuthenticated)



  const logoutAuth = (event) => {
    event.preventDefault();
    dispatch (authAction.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&  <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logoutAuth}>Logout</button>
          </li>
        </ul>
      </nav>}
     
    </header>
  );
};

export default Header;
