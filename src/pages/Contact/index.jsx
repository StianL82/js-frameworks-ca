import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <div>
        <S.Heading>Contact page</S.Heading>
        <S.Paragraph>
          This is a test to see if all styles and components are working
          correctly.
        </S.Paragraph>
        <S.ButtonContainer>
          <S.Button as={Link} to="/" isActive>
            Send In Form
          </S.Button>
        </S.ButtonContainer>
      </div>
    </div>
  );
}

export default Contact;