import css from './RegisterForm.module.css';

const RegisterForm = () => {
  return (
    <form className={css.registerForm} autoComplete="off">
      <label className={css.formLabel}>
        Username
        <input className={css.formInput} type="text" name="name" />
      </label>
      <label className={css.formLabel}>
        Email
        <input className={css.formInput} type="email" name="email" />
      </label>
      <label className={css.formLabel}>
        Password
        <input className={css.formInput} type="password" name="password" />
      </label>
      <button className={css.formBtn} type="submit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
