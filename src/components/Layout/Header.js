import { Fragment } from "react";
import HeaderCartButton from "../Layout/HeaderCartButton";
import { Container } from "./HeaderStyled";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <Container>
        <NavLink to="/foodzz">
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

        {props.onPathLocation === "/" && (
          <NavLink to="foodzz/order">
            <h4>order</h4>
          </NavLink>
        )}
        {props.onPathLocation === "/order" && (
          <HeaderCartButton onClick={props.onShowCart} />
        )}
      </Container>
    </Fragment>
  );
};

export default Header;
