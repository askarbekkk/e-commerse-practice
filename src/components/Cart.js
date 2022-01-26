import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Table} from "react-bootstrap";
import {ADD_TO_CART, DECREASE_FROM_CART, REMOVE_FROM_CART} from "../redux/types";
import TableRow from "./TableRow";

const Cart = () => {
    const {cart, rates, based} = useSelector(store => store.cart)
    console.log(cart)
    const dispatch = useDispatch()
    const totalPrice =  cart.reduce((acc,el) => {
            return el.quantity *  el.price + acc
        },0)
    const currency = {
        USD: "$" ,
        RUB: "₽",
        EUR: "€",
        SOM: "сом"
    }
    return (
        <div className="container">
            {
               cart.length === 0 ? <h1>Корзина пуста!</h1>:

                   <Table striped bordered hover size="sm">
                   <thead>
                   <tr>
                       <th>#</th>
                       <th>Name</th>
                       <th>image</th>
                       <th>quantity</th>
                       <th>price</th>

                   </tr>
                   </thead>
                   <tbody>
                   {
                       cart.map((el,idx) => (
                          <TableRow el={el} idx={idx} key={el.id}/>
                       ))
                   }
                   <tr>

                       <td colSpan={5}>  <h3> Total price:{(totalPrice * rates[based]).toFixed(2)} {currency[based]}</h3></td>

                   </tr>
                   <div>
                       <span></span>
                   </div>

                   </tbody>

               </Table>



            }
        </div>
    );
};

export default Cart;