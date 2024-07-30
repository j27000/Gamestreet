import { useCart } from "../../Context/CartContext";
import { CartEmpty } from "./components/CartEmpty"
import { Cartlist } from "./components/Cartlist";
export const CartPage = () => {
  const { CartList } = useCart();
  let Cartlength = 1;
  if (CartList.length === 0) {
    Cartlength = 0;
  }
  return (
    <main>
      {Cartlength ? <Cartlist /> : <CartEmpty />}


    </main>
  )
}
