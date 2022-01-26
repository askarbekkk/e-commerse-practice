import {ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from "../types";
const initialState = {
    favorite: []
}

export const FavoriteReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_TO_FAVORITE:
            return {...state,
                favorite: [...state.favorite, {...action.payload}]}
        case REMOVE_FROM_FAVORITE:
            return {...state,
                favorite: state.favorite.filter((el,id) => el.id !== action.payload )}
        default:
            return state
    }
}