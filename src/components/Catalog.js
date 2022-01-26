import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {ADD_TO_CART, GET_CATALOG} from "../redux/types";
import Product from "./Product";
import data from './data'
import Loading from "./Loader";
import {getProducts} from "../redux/actions/CartActions";

const Catalog = () => {
    const catalog = useSelector(store => store.cart.catalog)
    // rates
  const dispatch = useDispatch()
    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json => dispatch({type: GET_CATALOG, payload: json}))
        //  getProducts()
    }, [dispatch])

    return (
        <div className="container">
         <div className="row">

             {
                 catalog.length === 0? <Loading/> :

                         catalog.map((el) => (
                             <Product product={el} key={el.id}/>
                         ))

             }
         </div>
        </div>
    );
};

export default Catalog;