import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.loginForm} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.formLabel}>
        Email
        <input className={css.formInput} type="email" name="email" />
      </label>
      <label className={css.formLabel}>
        Password
        <input className={css.formInput} type="password" name="password" />
      </label>
      <button className={css.formBtn} type="submit">
        Log In
      </button>
    </form>
  );
};
export default LoginForm;
