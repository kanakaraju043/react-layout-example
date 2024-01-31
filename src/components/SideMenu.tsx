import React from "react";
import { Link } from "react-router-dom";
const navLinks = [
  {
    name: "Page1",
    link: "/",
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
      style={{
        backgroundColor: "blue",
        padding: 2,
        borderRadius: 2,
        display: "flex",
        width: "300px",
        flexDirection: "column",
        gap: 10,

        justifyContent: 'center',
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
     
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.link}
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
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
