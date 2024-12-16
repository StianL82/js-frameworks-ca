import styled from 'styled-components';
import { ButtonBase } from '../../styles/GlobalStyle';

export const Button = styled(ButtonBase)`
  background-color: ${(props) => props.theme.color.orangeButton};
  display: inline-flex;
  justify-content: center;
  margin: 1rem auto;

  &:hover {
    background-color: ${(props) => props.theme.color.orangeButtonHover};
    text-decoration: none;
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
