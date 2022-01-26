import axios from "axios";
import {GET_CATALOG} from "../types";

 export const addCash = (item) => {
     return {type: "GET_CASH", payload: item}
}



 export const removeCash = (item) => {
    return {type: "REMOVE_CASH", payload: item}
}


export const getProducts = () => {

    return dispatch => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> dispatch({type: GET_CATALOG, payload: json}))
    }
}
