import { useCart } from "../../../Context/CartContext";
import { Link } from "react-router-dom";

export const CartCard = ({ product }) => {
  const { name, poster, price } = product;
  const { removeProduct } = useCart();

  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-4 mb-5 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="flex items-center">
        <Link to={`/Products/${product.id}`}>
          <img className="w-32 h-32 rounded object-cover" src={poster} alt={name} />
        </Link>
        <div className="ml-4">
          <Link to={`/Products/${product.id}`}>
            <p className="text-lg font-semibold dark:text-slate-200">{name}</p>
          </Link>
          <button
            onClick={() => removeProduct(product)}
            className="text-base text-red-500 hover:text-red-700 mt-2"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="flex items-center text-lg dark:text-slate-200">
        <span>${price}</span>
      </div>
    </div>
  );
};
