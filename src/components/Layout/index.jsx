import React from "react";
import NavExample from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div>
      <NavExample />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;