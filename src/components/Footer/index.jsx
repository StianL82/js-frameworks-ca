import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterText>&copy; {new Date().getFullYear()} Stian Lilleng</FooterText>
    </FooterContainer>
  );
}

export default Footer;