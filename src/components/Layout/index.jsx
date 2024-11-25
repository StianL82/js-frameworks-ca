import React from "react";
import HeaderNav from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div>
      <HeaderNav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;