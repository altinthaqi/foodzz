import { Fragment } from "react";
import HeaderCartButton from "../Layout/HeaderCartButton";
import { Container } from "./HeaderStyled";
import { MdLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";

const Header = (props) => {
  return (
    <Fragment>
      <Container>
        <h3>foodZz</h3>
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
        <HeaderCartButton onClick={props.onShowCart} />
      </Container>
    </Fragment>
  );
};

export default Header;
