import { createContext, useContext, useReducer } from "react";
import { ProductReducer } from "../Reducer";

const initialstate = {
    productList: [],
    onlyInStock: false,
    bestSelleronly: false,
    SortBy: null,
    ratings: null,
}

const Pro = createContext(initialstate);

export const ProductProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ProductReducer, initialstate)
    function intialproducts(products) {
        dispatch(
            {
                type: "PRODUCT_LIST",
                payload: {
                    products: products
                }
            }
        )
    }
    function bestseller(products) {
        return state.bestSelleronly ? products.filter(product => product.best_seller === true) : products
    }
    function inStock(products) {
        return state.onlyInStock ? products.filter(product => product.in_stock === true) : products
    }
   function Sort(products) {
    if (state.SortBy === "low") {
        return products.sort((a, b) => Number(a.price) - Number(b.price));
    }
    if (state.SortBy === "high") {
        return products.sort((a, b) => Number(b.price) - Number(a.price));
    }
    return products;
}
    function rating(products) {
        if (state.ratings === "4STARSABOVE") {
            return products.filter(product => product.rating >= 4);
        }
        if (state.ratings === "3STARSABOVE") {
            return products.filter(product => product.rating >= 3);
        }
        if (state.ratings === "2STARSABOVE") {
            return products.filter(product => product.rating >= 2);
        }
        if (state.ratings === "1STARSABOVE") {
            return products.filter(product => product.rating >= 1);
        }
        return products;
    }
    const filterproductlist = rating(Sort(inStock((bestseller(state.productList)))));



    const value =
    {
        productList: filterproductlist,
        intialproducts,
        state, dispatch

    }

    return (
        <Pro.Provider value={value}>
            {children}
        </Pro.Provider>

    )

}

export const useFilter = () => {
    return useContext(Pro);
}


