import { useState } from "react";
import ProductCard from "./ProductCard";

export const sampleProducts = [
  { id: 1, name: "Apple", category: "Fruits", price: 1.5 },
  { id: 2, name: "Milk", category: "Dairy", price: 2.0 },
  { id: 3, name: "Bread", category: "Bakery", price: 2.5 },
  { id: 4, name: "Cheese", category: "Dairy", price: 4.0 },
  { id: 5, name: "Banana", category: "Fruits", price: 1.0 },
];

export default function ProductList({ onAdd }) {
  const [category, setCategory] = useState("All");
  const categories = ["All", ...new Set(sampleProducts.map((p) => p.category))];
  const visible =
    category === "All" ? sampleProducts : sampleProducts.filter((p) => p.category === category);

  return (
    <section>
      <select aria-label="Filter by category" value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>
      {visible.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {visible.map((p) => <ProductCard key={p.id} product={p} onAdd={onAdd} />)}
        </ul>
      )}
    </section>
  );
}