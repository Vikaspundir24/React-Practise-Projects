import { useSelector, useDispatch } from 'react-redux';
import { authAction } from '../store/authStore';
import classes from './Auth.module.css';

const Auth = () => {

  const dispatch = useDispatch()
  const authLogin = useSelector(state => state.auth.isAuthenticated)


  const loginAuth = (event) => {
    event.preventDefault();
    dispatch (authAction.login())
  }
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginAuth}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
