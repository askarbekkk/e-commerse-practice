import {combineReducers, createStore, applyMiddleware} from "redux";

import {composeWithDevTools} from "redux-devtools-extension";
import cartReducer from "./reducers/CartReducer";
import {FavoriteReducer} from "./reducers/FavoriteReducer";
import thunk from "redux-thunk";

export const store = createStore(combineReducers({
    cart: cartReducer,
    favorite: FavoriteReducer,
}), composeWithDevTools(applyMiddleware(thunk)))


