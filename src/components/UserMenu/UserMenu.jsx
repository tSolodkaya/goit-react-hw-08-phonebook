import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, </p>
      <button className={css.logoutBtn}> Logout</button>
    </div>
  );
};

export default UserMenu;
