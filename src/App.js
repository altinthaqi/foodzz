import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/Order";
import About from "./pages/About";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import { lightTheme, darkTheme } from "./assets/theme/theme";
import { ThemeProvider } from "styled-components";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [theme, setTheme] = useState("light");
  const [currentPathLocation, setCurrentPathLocation] = useState("");

  const changePathLocation = (query) => {
    setCurrentPathLocation(query);
  };

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <CartProvider>
        <BrowserRouter>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Header
            onShowCart={showCartHandler}
            themeToggler={themeToggler}
            theme={theme}
            onPathLocation={currentPathLocation}
          />
          <Routes>
            <Route
              path="/"
              element={<About onPathChange={changePathLocation} />}
            />
            <Route
              path="/order"
              element={<Order onPathChange={changePathLocation} />}
            />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
