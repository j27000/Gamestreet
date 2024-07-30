import { useLocation } from "react-router-dom"
import { OrderSuccess } from "./components/OrderSuccess";
import { OrderFail } from "./components/OrderFail";


export const OrderPage = () => {
  const { state } = useLocation();
  return (
    <div>
      
      {state ? <OrderSuccess /> : < OrderFail />}

    </div>





  )
}
