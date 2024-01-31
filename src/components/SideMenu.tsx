import React from "react";
import { Link } from "react-router-dom";
const navLinks = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article",
    link: "/article1",
  },
  {
    name: "Page1",
    link: "/page1",
  },

  {
    name: "Page2",
    link: "/page2",
  },
  {
    name: "Page3",
    link: "/page3",
  },
  {
    name: "Page4",
    link: "/page4",
  },
];

const SideMenu = () => {
  return (
    <div
      className="bg-gray-600"
      style={{
        padding: 2,
        borderRadius: 2,
        display: "flex",
        width: "300px",
        flexDirection: "column",
        gap: 10,

        textAlign:'left',
        justifyContent: "center",
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      {navLinks.map((item) => (
        <Link key={item.name} to={item.link} style={{ textDecoration: "none" }}>
          <div
            style={{
              display: "flex",
            //   alignItems: "center",
              gap: 2,
              color: "white",
              flexDirection: "column",
              textDecoration: "none",
            }}
          >
            <div>{item.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default SideMenu;
