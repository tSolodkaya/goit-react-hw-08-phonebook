import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    border-bottom: 3px solid #7fffd4;
  }
`;

const AuthNav = () => {
  return (
    <div className={css.authNavigation}>
      <StyledLink className={css.link} to="/register">
        Register
      </StyledLink>
      <StyledLink className={css.link} to="/login">
        Log In
      </StyledLink>
    </div>
  );
};

export default AuthNav;
