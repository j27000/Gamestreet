

export const ProductReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "PRODUCT_LIST":
            return { productList: payload.products }

        case "SORT_BY":
            return { ...state, SortBy: payload.SortBy }
        case "RATINGS":
            return { ...state, ratings: payload.ratings }
        case "BEST_SELLER_ONLY":
            return { ...state, bestSelleronly: payload.bestSelleronly }

        case "ONLY_IN_STOCK":
            return { ...state, onlyInStock: payload.onlyInStock }
        default:
            throw new Error("NO case found")
    }
}