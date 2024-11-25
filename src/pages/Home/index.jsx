import React from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  background: ${(props) =>
    props.isActive ? props.theme.color.secondaryColor : props.theme.color.primaryColor};
  color: ${(props) => props.theme.color.buttonTextColor};
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.color.buttonHoverBg};
  }
`;

const Heading = styled.h1`
  color: ${(props) => props.theme.color.headingColor};
  margin-bottom: ${(props) => props.theme.spacing.large};
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.color.textColor};
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
