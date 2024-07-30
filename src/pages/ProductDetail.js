import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Stars } from "../components/Elements/Stars";
import { useCart } from "../Context/CartContext";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const [isInCart, setIsInCart] = useState(false);
  const { addProduct, CartList, removeProduct } = useCart();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`${process.env.REACT_APP_HOST}/products/${id}`);
        if (!response.ok) {
          throw new Error('Product not found');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product:", error);
        // You might want to set an error state here and show an error message to the user
      }
    }
    fetchProduct();
  }, [id]);

  useEffect(() => {
    const productInCart = CartList.find((item) => product.id === item.id);
    setIsInCart(productInCart !== undefined);
  }, [CartList, product.id]);

  const handleAddProduct = () => {
    if (product.in_stock) {
      addProduct(product);
    }
  };

  const handleRemoveProduct = () => {
    removeProduct(product);
  };

  if (!product.id) {
    return <div>Loading...</div>; // or a more sophisticated loading state
  }

  return (
    <main>
      <section>
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-white">{product.name}</h1>
        <p className="mb-5 text-lg text-center text-gray-700 dark:text-gray-300">{product.overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded shadow-lg" src={product.poster} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              <span className="mr-1">$</span>
              <span>{product.price}</span>
            </p>
            <p className="my-3">
              <Stars rating={product.rating} />
            </p>
            <p className="my-4 select-none">
              {product.best_seller && (
                <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">
                  BEST SELLER
                </span>
              )}
              <span className={`font-semibold ${product.in_stock ? "text-emerald-600 bg-emerald-50" : "text-red-600 bg-red-50"} border rounded-lg px-3 py-1 mr-2`}>
                {product.in_stock ? "IN STOCK" : "OUT OF STOCK"}
              </span>
              <span className="font-semibold text-blue-500 border bg-blue-50 rounded-lg px-3 py-1 mr-2">
                {product.size} MB
              </span>
            </p>
            <p className="my-3">
              {!isInCart ? (
                <button
                  onClick={handleAddProduct}
                  className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg ${product.in_stock
                      ? "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
                      : "bg-gray-400 cursor-not-allowed"
                    }`}
                  disabled={!product.in_stock}
                >
                  {product.in_stock ? "Add to Cart" : "Out of Stock"}
                  {product.in_stock && <i className="ml-1 bi bi-plus-lg"></i>}
                </button>
              ) : (
                <button
                  onClick={handleRemoveProduct}
                  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300"
                >
                  Remove from Cart
                </button>
              )}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">{product.long_description}</p>
          </div>
        </div>
      </section>
    </main>
  );
};