import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.color.lightGray};
  color: ${(props) => props.theme.color.textColor};
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.color.darkGrayColor};
`;

export const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;
