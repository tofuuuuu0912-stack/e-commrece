import React, { useEffect, useState } from "react";

//node.js

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    };

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10">Our Products</h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              <h2 className="text-lg font-semibold mb-2 line-clamp-1">
                {product.title}
              </h2>

              <p className="text-sm text-gray-500 mb-2 capitalize">
                {product.category}
              </p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold text-gray-800">
                  ${product.price}
                </span>
                <span className="text-sm text-green-600 font-medium">
                  {product.discountPercentage}% OFF
                </span>
              </div>

              <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
