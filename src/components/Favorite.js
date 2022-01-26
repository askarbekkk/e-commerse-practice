import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART, ADD_TO_FAVORITE, REMOVE_FROM_FAVORITE} from "../redux/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import FavoriteCard from "./FavoriteCard";

const Favorite = () => {

    const favorite = useSelector(store => store.favorite.favorite)
    console.log(favorite)
    const {based, rates} = useSelector(s => s.cart)
    const currency = {
        USD: "$" ,
        RUB: "₽",
        EUR: "€",
        SOM: "сом"
    }
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row">
                {
                    favorite.map( product => (
                      <FavoriteCard product={product}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Favorite;