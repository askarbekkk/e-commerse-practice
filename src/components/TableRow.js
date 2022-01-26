import React from 'react';
import {ADD_TO_CART, DECREASE_FROM_CART, REMOVE_FROM_CART} from "../redux/types";
import {useDispatch, useSelector} from "react-redux";

const TableRow = ({el,idx}) => {
    const {cart, rates, based} = useSelector(store => store.cart)
    const totalPrice =  cart.reduce((acc,el) => {
        return el.quantity * rates[based] *  el.price + acc
    },0)
    const currency = {
        USD: "$" ,
        RUB: "₽",
        EUR: "€",
        SOM: "сом"
    }
    const dispatch = useDispatch()
    return (
        <tr key={el.id}>
            <td>{idx + 1}</td>
            <td>{el.title}</td>
            <td><img src={el.image} alt="" width="30px"/></td>
            <td>
                <button className="btn btn-danger mx-3" disabled={el.quantity === 1}
                        onClick={() => dispatch({type:DECREASE_FROM_CART, payload:idx})}
                >-</button>
                {el.quantity}
                <button className="btn btn-primary mx-3" onClick={() =>
                    dispatch({type: ADD_TO_CART, payload: el})}>+</button>
                <button className="btn btn-secondary" onClick={() =>
                    (dispatch({type: REMOVE_FROM_CART, payload: el.id}))}>удалить</button>
            </td>
            <td>{(el.price * el.quantity * rates[based]).toFixed(2) } &nbsp; {currency[based]}  </td>
        </tr>
    );
};

export default TableRow;