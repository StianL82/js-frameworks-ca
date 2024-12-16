import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) => props.theme.color.primaryColor};
  color: ${(props) => props.theme.color.white};
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.color.buttonHoverBg};
  }
`;

export const Paragraph = styled.p`
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
  text-align: center;
`;

export const SearchBarContainer = styled.div`
  padding: 16px;
`;
