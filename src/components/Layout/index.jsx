import React from 'react';
import HeaderNav from '../Header';
import Footer from '../Footer';
import * as S from './index.styles';

/**
 * Layout Component
 *
 * Provides a consistent page structure with a header, main content area, and footer.
 *
 * @component
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - The content to be displayed inside the layout.
 * @returns {JSX.Element} The rendered Layout component.
 */

function Layout({ children }) {
  return (
    <S.LayoutContainer>
      <HeaderNav />
      <S.Main>{children}</S.Main>
      <Footer />
    </S.LayoutContainer>
  );
}

export default Layout;
