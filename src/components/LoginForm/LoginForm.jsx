import css from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form className={css.loginForm} autoComplete="off">
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
