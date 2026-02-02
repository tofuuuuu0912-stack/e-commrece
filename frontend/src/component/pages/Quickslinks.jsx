import { useState } from "react";

const productsData = [
  { id: 1, name: "Wireless Headphones", price: "$99", category: "trending" },
  { id: 2, name: "Smart Watch", price: "$149", category: "best" },
  { id: 3, name: "Gaming Laptop", price: "$1299", category: "top" },
  { id: 4, name: "Bluetooth Speaker", price: "$59", category: "trending" },
  { id: 5, name: "Running Shoes", price: "$89", category: "best" },
];

const Quickslinks = () => {
  const [filter, setFilter] = useState("all");

  const filteredProducts =
    filter === "all"
      ? productsData
      : productsData.filter((item) => item.category === filter);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Quick Links</h2>

      {/* Quick Buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("trending")}>🔥 Trending</button>
        <button onClick={() => setFilter("best")}>⭐ Best Sale</button>
        <button onClick={() => setFilter("top")}>🏆 Top Sale</button>
      </div>

      {/* Products */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "15px" }}>
        {filteredProducts.map((product) => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <h4>{product.name}</h4>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quickslinks;
