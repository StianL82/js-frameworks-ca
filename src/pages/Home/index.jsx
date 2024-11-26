import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div>
        <S.Heading>Welcome to My Homepage</S.Heading>
        <S.Paragraph>
          This is a test to see if all styles and components are working
          correctly.
        </S.Paragraph>
        <S.Button as={Link} to="/product/1" isActive>
            Product Page
          </S.Button>
      </div>
    </div>
  );
}

export default Home;
