import css from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome user</p>
      <button> Logout</button>
    </div>
  );
};

export default UserMenu;
