import styled from 'styled-components';

export const Button = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) =>
    props.isActive
      ? props.theme.color.secondaryColor
      : props.theme.color.primaryColor};
  color: ${(props) => props.theme.color.buttonTextColor};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.color.buttonHoverBg};
  }
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.color.headingColor};
  margin-bottom: ${(props) => props.theme.spacing.large};
  text-align: center;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.color.textColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;
