import React, { ReactNode } from "react";
import SideMenu from "./SideMenu";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        backgroundColor: "red",
        display: "flex",
        color: "white",
        padding: 3,
        gap: 3,
        overflowY: "hidden",
        margin: '0px',
        height: "100vh",
      }}
    >
      <SideMenu />
      <div
        style={{
          width: "100%",
          overflowY: "scroll",
          backgroundColor: "gray"
        }}
      > <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
