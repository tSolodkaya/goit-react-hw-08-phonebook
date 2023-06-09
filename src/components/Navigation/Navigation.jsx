import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    border-bottom: 3px solid #7fffd4;
  }
`;

const Navigation = () => {
  return (
    <nav>
      <StyledLink className={css.link} to="/">
        Home
      </StyledLink>

      <StyledLink className={css.link} to="/contacts">
        Contacts
      </StyledLink>
    </nav>
  );
};

export default Navigation;
