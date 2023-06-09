import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';
import { useAuth } from 'hooks';

const StyledLink = styled(NavLink)`
  &.active {
    border-bottom: 3px solid #7fffd4;
  }
`;

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>
      {isLoggedIn && (
        <StyledLink className={css.link} to="/contacts">
          Contacts
        </StyledLink>
      )}
    </nav>
  );
};

export default Navigation;
