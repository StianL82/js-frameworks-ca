import React from "react";
import styled from "styled-components";
import NavExample from "../../components/Header";
import Footer from "../../components/Footer";

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) =>
    props.isActive ? props.theme.secondaryColor : props.theme.primaryColor};
  color: ${(props) => props.theme.buttonTextColor};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.buttonHoverBg};
  }
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.headingColor};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-bottom: ${(props) => props.theme.spacing.medium};
`;

function Home() {
  return (
    <div>
      <div>
        <Heading>Welcome to My Homepage</Heading>
        <Paragraph>
          This is a test to see if all styles and components are working
          correctly.
        </Paragraph>
        <Button isActive>Primary Button</Button>
        <Button>Secondary Button</Button>
      </div>
      <Footer />
    </div>
  );
}


export default Home;