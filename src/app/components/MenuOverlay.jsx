import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, toggleNavbar }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            toggleNavbar={toggleNavbar}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
