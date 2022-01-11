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

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const [theme, setTheme] = useState("dark");

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
          />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
