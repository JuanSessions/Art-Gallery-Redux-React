import * as actionTypes from "./shopping-types";


const INITIAL_STATE = {
    products: [{
            id: 1,
            title: "A woman under the influence",
            description: "A Woman Under the Influence is a 1974 American drama film written and directed by John Cassavetes. The story follows a woman (Gena Rowlands) whose unusual behavior leads to conflict with her blue-collar husband (Peter Falk) and family. It received two Academy Award nominations, for Best Actress and Best Director.",
            price: 25.0,
            image: "./images/cassavetes.png",
        },
        {
            id: 2,
            title: "Alfred Hitchcock: The Ultimate Collection",
            description: "Universally recognized as the Master of Suspense, the legendary Alfred Hitchcock directed some of cinema's most thrilling and unforgettable classics. Alfred Hitchcock: The Ultimate Collection features 15 iconic films from the acclaimed director's illustrious career including Psycho, The Birds, Rear Window, Vertigo, North by Northwest and many more. Starring Hollywood favorites such as James Stewart, Cary Grant, Grace Kelly, Paul Newman, Janet Leigh, Anthony Perkins, Tippi Hedren, Sean Connery and Kim Novak, this definitive collection showcases a true cinematic master at his best. Featuring over 15 hours of insightful bonus features plus an exclusive collectible book, each film has been digitally restored from high resolution film elements for the ultimate Hitchcock experience.",
            price: 50.0,
            image: "./images/collage.jpg",
        },
        {
            id: 3,
            title: "Jules et Jim",
            description: "The film is based on Henri-Pierre Roché's 1953 semi-autobiographical novel describing his relationship with young writer Franz Hessel and Helen Grund, whom Hessel married.[2] Truffaut came across the book in the mid-1950s while browsing through some secondhand books at a shop along the Seine in Paris. He later befriended the elderly Roché, who had published his first novel at the age of 74. The author approved of the young director's interest to adapt his work to another medium.",
            price: 25.0,
            image: "./images/julesjim.png",

        }, {
            id: 4,
            title: "The Big Lebowski",
            description: "The film is loosely inspired by the work of Raymond Chandler. Joel Coen stated, We wanted to do a Chandler kind of story how it moves episodically, and deals with the characters trying to unravel a mystery, as well as having a hopelessly complex plot that's ultimately unimportant.[4] The original score was composed by Carter Burwell, a longtime collaborator of the Coen brothers.",
            price: 35.0,
            image: "./images/lebowski.png",

        }, {
            id: 5,
            title: "Eternal Sunshine of the Spotless Mind",
            description: "The film uses elements of the psychological thriller and a nonlinear narrative to explore the nature of memory and romantic love.[2] It opened in North America on March 19, 2004, receiving high acclaim from critics and audiences and grossed over $74 million worldwide. It won the Academy Award for Best Original Screenplay, and Winslet received a nomination for Academy Award for Best Actress. The film developed a cult following in the years after its release and has come to be regarded by many critics as one of the best films of the early 21st century.[3]",
            price: 35.0,
            image: "./images/eternal.png",

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