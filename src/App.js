import { BrowserRouter, Route, Routes } from "react-router-dom";
import Order from "./pages/Order";
import About from "./pages/About";
import { useState } from "react";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Header from "./components/Layout/Header";
import { lightTheme, darkTheme } from "./assets/theme/theme";
import { ThemeProvider } from "styled-components";

import "./App.css";
import Product from "./components/Meals/Product";
import Recipes from "./components/Meals/Recipes";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [theme, setTheme] = useState("light");

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
          />
          <Routes>
            <Route path="/" element={<About />} />
            recipes
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<Product />} />
            <Route path="/order" element={<Order />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
