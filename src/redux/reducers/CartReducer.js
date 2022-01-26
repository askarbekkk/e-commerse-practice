import {ADD_TO_CART, DECREASE_FROM_CART, GET_BASED, GET_CATALOG, GET_ONE_PRODUCT, REMOVE_FROM_CART} from "../types";
const initialState = {
 catalog: [],
    based: "USD",
    singleItem: [],
    cart:[],
    rates: {
        USD:0.013 ,
        RUB:1,
        EUR:0.011,
        SOM: 1.07
    },


}

const cartReducer = (state = initialState, action) => {
    // console.log("корзина:", state.cart)
    switch(action.type){
        case ADD_TO_CART:
            const findProduct = state.cart.find(el => el.id === action.payload.id)
            // console.log("продукт:", findProduct, "action.payload:",action.payload)
            if (findProduct) {
                return {...state, cart: state.cart.map(el => el.id === action.payload.id ?
                        {...el,
                    quantity: el.quantity + 1
                    }  : el)
                }
            }
             return {...state, cart: [...state.cart, {...action.payload, quantity: 1}]}

        case GET_CATALOG:
            console.log(action.payload)
            return {...state, catalog: action.payload}
        case GET_ONE_PRODUCT:
            return {...state, singleItem: action.payload}
        case REMOVE_FROM_CART:
        return {...state, cart: state.cart.filter((el,id) => el.id !== action.payload )}

        case DECREASE_FROM_CART:
        if(state.cart[action.payload].quantity > 1){
            return {...state, cart: state.cart.map((el,idx) => idx === action.payload ?
                    {...el,
                        quantity: el.quantity - 1
                    }  : el)
            }
        }
        case GET_BASED:
            return {...state,based:  action.payload}
            default:
            return state
    }

}

export default cartReducer