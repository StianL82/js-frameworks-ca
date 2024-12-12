import styled from 'styled-components';
import { ButtonBase } from '../../styles/GlobalStyle';

export const Button = styled(ButtonBase)`
  background-color: #ffc107;
  display: inline-flex;
  justify-content: center;
  margin: 1rem auto;

  &:hover {
    background-color: #e0a800;
    text-decoration: none;
  }
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.color.textColor};
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
