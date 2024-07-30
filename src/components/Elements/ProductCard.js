import { Link } from "react-router-dom";
import { Stars } from "./Stars";
import { useCart } from "../../Context/CartContext";
import { useState, useEffect } from "react";

export const ProductCard = ({ product }) => {
    const { id, name, overview, poster, best_seller, rating, price, in_stock } = product;
    const { addProduct, CartList, removeProduct } = useCart();
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        const productInCart = CartList.find((item) => product.id === item.id);
        setIsInCart(productInCart !== undefined);
    }, [CartList, product.id]);

    const handleAddProduct = () => {
        if (!in_stock) {
            alert("This product is currently out of stock.");
            return;
        }
        addProduct(product);
    };

    const handleRemoveProduct = () => {
        removeProduct(product);
    };

    return (
        <div className="m-3 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 transition-transform transform hover:scale-105">
            <Link to={`/products/${id}`} className="relative">
                {best_seller && (
                    <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">
                        Best Seller
                    </span>
                )}
                <img className="rounded-t-lg w-full h-64 object-cover" src={poster} alt={name} />
            </Link>
            <div className="p-5 flex flex-col justify-between h-30">
                <div>
                    <Link to={`/products/${id}`}>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {name}
                        </h5>
                    </Link>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
                    <Stars rating={rating} />
                </div>
                <div className="flex justify-between items-center mt-1">
                    {isInCart ? (
                        <button
                            onClick={handleRemoveProduct}
                            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-800 transition-colors duration-200"
                        >
                            Remove from Cart
                        </button>
                    ) : (
                        <button
                            onClick={handleAddProduct}
                            className={`inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none transition-colors duration-200 ${in_stock
                                    ? 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800'
                                    : 'bg-gray-400 cursor-not-allowed'
                                }`}
                            disabled={!in_stock}
                        >
                            {in_stock ? 'Add to Cart' : 'Out of Stock'}
                            {in_stock && <i className="ml-1 bi bi-plus-lg"></i>}
                        </button>
                    )}
                    <span className="text-2xl dark:text-gray-200">
                        ${price}
                    </span>
                </div>
            </div>
        </div>
    );
};

