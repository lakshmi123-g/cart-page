import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Cart from "./cart";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;