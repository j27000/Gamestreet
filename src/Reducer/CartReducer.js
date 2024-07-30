

export const CartReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'ADD_TO_CART':
            return { ...state, CartList: payload.product, total: payload.updatedTotal }
        case 'REMOVE_FROM_CART':
            return { ...state, CartList: payload.product,total: payload.updatedTotal }
        case 'CLEAR':
            return { ...state, CartList: payload.product, total: payload.total }
        default:
            throw new Error("NO case found")

    }


}


