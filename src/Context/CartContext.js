import { createContext, useReducer } from "react"
import { useContext } from "react";
import { CartReducer } from "../Reducer/CartReducer";



const intitalState = {
    CartList: [],
    total: 0
}
const list = createContext(intitalState);


export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, intitalState);
   

    function addProduct(product) {
        const updatedList = state.CartList.concat(product);
        const updatedTotal = state.total + product.price;


        dispatch({ type: 'ADD_TO_CART', payload: { product: updatedList, updatedTotal: updatedTotal } })

    }
    function removeProduct(product) {
        const updatedList = state.CartList.filter((pro) => (product.id !== pro.id))
        const updatedTotal = state.total - product.price;
        dispatch({ type: 'REMOVE_FROM_CART', payload: { product: updatedList, updatedTotal: updatedTotal } })


    }
    function clearCart() {
        dispatch({ type: 'CLEAR', payload: { product: [], total: 0 } })


    }


    const value = {
        CartList: state.CartList,
        total: state.total,
        addProduct,
        removeProduct,
        clearCart,
    }

    return (
        <list.Provider value={value}>
            {children}
        </list.Provider>
    )
}
export const useCart = () => {
    return useContext(list);
};






