import React from 'react';
import {ADD_TO_CART, REMOVE_FROM_FAVORITE} from "../redux/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const FavoriteCard = ({product}) => {

    const dispatch = useDispatch()
    const {based, rates} = useSelector(s => s.cart)
    const currency = {
        USD: "$" ,
        RUB: "₽",
        EUR: "€",
        SOM: "сом"
    }
    return (
        <div className="col-3">
            <div className="card mx-2 my-2">
               <Link to={`/favorite/${product.id}`}>
                   <img className="h-50 w-75" src={product.image} alt="Card image cap"/>
               </Link>
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>

                    <p className="ml-auto my-2">{(product.price * rates[based]).toFixed(2)} {currency[based]}</p>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary me-3"
                                onClick={() => dispatch({type: ADD_TO_CART, payload: product})}
                        >Добавить в корзину</button>
                        <button className="btn btn-outline-danger"
                                onClick={() => dispatch({type: REMOVE_FROM_FAVORITE, payload: product.id})}
                        >
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavoriteCard;