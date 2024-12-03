import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';

export const Logo = styled.img`
  height: auto;
  width: 100px;
  max-width: 100%;
  object-fit: contain;
`;

export const StyledNavbar = styled(Navbar)`
  background-color: ${(props) => props.theme.color.lightGray};

  .navbar-toggler {
    order: 2;
  }

  .navbar-brand {
    order: 1;
  }

  .navbar-collapse {
    order: 3;
  }

  @media (max-width: 179px) {
    .navbar-toggler {
      order: 1 !important;
    }

    .navbar-brand {
      order: 2 !important;
      margin: 0 auto;
      display: flex;
      justify-content: center;
    }

    .navbar-collapse {
      order: 3 !important;
    }
  }

  border-bottom: 1px solid ${(props) => props.theme.color.darkGrayColor};
`;
