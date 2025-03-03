import React from 'react';
import * as S from './index.styles';

/**
 * Footer Component
 *
 * Displays the footer section with the current year and site branding.
 *
 * @component
 * @returns {JSX.Element} The rendered Footer component.
 */

function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterText>
        &copy; {new Date().getFullYear()} Spendit by Stian Lilleng
      </S.FooterText>
    </S.FooterContainer>
  );
}

export default Footer;
