import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
    products: [
        {
            id: 1,
            title: "Learn JavaScript Quickly",
            description:
                "A Complete Beginner’s Guide to Learning JavaScript, Even If You’re New to Programming (Crash Course With Hands-On Project Book)",
            price: 15.0,
            image:
                "https://m.media-amazon.com/images/I/51F8Q2HHw-L.jpg",
        },
        {
            id: 2,
            title: "I never dreamed I would be a super cool web developer but here I am killing it",
            description:
                "notebook journal",
            price: 5.0,
            image:
                "https://images-na.ssl-images-amazon.com/images/I/51WWSa-IvcL._SX331_BO1,204,203,200_.jpg",
        },
        {
            id: 3,
            title: "Head First JavaScript Programming",
            description:
                "A Brain-Friendly Guide",
            price: 35.0,
            image:
                "https://m.media-amazon.com/images/I/51CEdROWHsL.jpg",
        },
    ],
    cart: [],
    currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // add item to cart
        case actionTypes.ADD_TO_CART:
            // get item from products
            const item = state.products.find(
                (product) => product.id === action.payload.id
            );
            // check if item is already in cart
            const inCart = state.cart.find((item) =>
                item.id === action.payload.id ? true : false
            );
            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }]
            }
        // remove item from cart
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id)
            }
        // adjust quantity
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                )
            }
        // load current item
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }

        default:
            return state;
    }
}

export default shopReducer;
