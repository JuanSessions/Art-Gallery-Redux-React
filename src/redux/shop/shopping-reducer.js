import * as actionTypes from "./shopping-types";


const INITIAL_STATE = {
    products: [{
            id: 1,
            title: "Neugierige Geister",
            description: "Description of the different pieces here and artist's name",
            price: 0,
            image: "./images/collageJuans.png",
        },
        {
            id: 2,
            title: "(isAlive ? 'Love' : 'Death')",
            description: "Description of the different pieces here and artist's name",
            price: 0,
            image: "./images/dasein.png",
        },
        {
            id: 3,
            title: "Neon Me",
            description: "Description of the different pieces here and artist's name",
            price: 0,
            image: "./images/juanHorn.jpg",

        }, {
            id: 4,
            title: "Both In Jail And Under The Bed",
            description: "Description of the different pieces here and artist's name",
            price: 0,
            image: "./images/nazijail.jpg",

        }, {
            id: 5,
            title: "Mit Papagei Auf Den Kanarischen",
            description: "Description of the different pieces here and artist's name",
            price: 0,
            image: "./images/juanCanarias.jpg",

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
                cart: inCart ?
                    state.cart.map((item) =>
                        item.id === action.payload.id ? {...item, qty: item.qty + 1 } :
                        item
                    ) : [...state.cart, {...item, qty: 1 }]
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
                    item.id === action.payload.id ? {...item, qty: +action.payload.qty } :
                    item
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