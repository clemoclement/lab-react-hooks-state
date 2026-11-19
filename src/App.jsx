import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [cart, setCart] = useState([]);
  const addToCart = (p) => setCart((prev) => (prev.some((i) => i.id === p.id) ? prev : [...prev, p]));

  return (
    <div className={`App ${isDark ? "dark" : "light"}`}>
      <h1>🛒 Shopping App</h1>
      <DarkModeToggle isDark={isDark} onToggle={() => setIsDark((d) => !d)} />
      <ProductList onAdd={addToCart} />
      <Cart items={cart} />
    </div>
  );
}