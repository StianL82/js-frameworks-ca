import styled from 'styled-components';
import { ButtonBase } from '../../styles/GlobalStyle';

export const Button = styled(ButtonBase)`
  background-color: ${(props) => props.theme.color.orangeButton};

  &:hover {
    background-color: ${(props) => props.theme.color.orangeButtonHover};
  }
`;
