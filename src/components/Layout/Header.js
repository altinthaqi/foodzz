import { Fragment } from "react";
import HeaderCartButton from "../Layout/HeaderCartButton";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";

import { Nav, Hamburger, Menu, MenuLink } from "./HeaderStyled";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <NavLink to="/">
        <h3>foodzz</h3>
      </NavLink>

      {props.theme === "light" ? (
        <BsFillMoonFill
          className="themeIcon"
          onClick={() => props.themeToggler()}
        />
      ) : (
        <MdLightMode
          className="themeIcon"
          onClick={() => props.themeToggler()}
        />
      )}

      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <Menu isOpen={isOpen}>
        <NavLink
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
          to="/order"
        >
          <MenuLink>order</MenuLink>
        </NavLink>

        <NavLink
          onClick={() => (isOpen === true ? setIsOpen(!isOpen) : "")}
          to="/recipes"
        >
          <MenuLink>recipes</MenuLink>
        </NavLink>

        <HeaderCartButton
          onClick={() => {
            props.onShowCart();
            setIsOpen(!isOpen);
          }}
        />
      </Menu>
    </Nav>
  );
};

export default Header;
