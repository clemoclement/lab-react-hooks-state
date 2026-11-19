export default function ProductCard({ product, onAdd }) {
  return (
    <li>
      {product.name} ({product.category}) ${product.price}{" "}
      <button data-testid={`product-${product.id}`} onClick={() => onAdd(product)}>Add to Cart</button>
    </li>
  );
}