import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART, ADD_TO_FAVORITE, GET_ONE_PRODUCT} from "../redux/types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import Loading from "./Loader";

const ItemDetails = () => {
    const params = useParams()
const dispatch = useDispatch()

    const singleProduct = useSelector(store => store.cart.singleItem)
    useEffect(() => {
        axios(`https://fakestoreapi.com/products/${params.id}`)
            .then(({data}) => dispatch({type: GET_ONE_PRODUCT, payload: data}))
    },[dispatch])
    console.log(singleProduct)
    return (
        <div className="container">
           <h1>{singleProduct.title}</h1>

            <div className="row">
                <div className="col-6">
                    {
                        singleProduct.image ?
                            <img src={singleProduct.image} alt="" className="w-100" style={{width: "400px", height: "400px"}}/>
                            : <Loading/>
                    }
                </div>
                <div className="col-6 d-flex align-items-center justify-content-center">
                    <div>
                        <button className="btn btn-primary me-3"
                                onClick={() => dispatch({type: ADD_TO_CART, payload:singleProduct })}
                        >Добавить в корзину</button>
                        <button className="btn btn-outline-danger"
                                onClick={() => dispatch({type: ADD_TO_FAVORITE, payload: singleProduct})}
                        >
                            <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;