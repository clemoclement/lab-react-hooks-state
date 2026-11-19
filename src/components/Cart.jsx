export default function Cart({ items }) {
  return (
    <section>
      <h2>Shopping Cart</h2>
      {items.length === 0 ? <p>Your cart is empty.</p> : (
        <ul>{items.map((i) => <li key={i.id}>{i.name} is in your cart.</li>)}</ul>
      )}
    </section>
  );
}