import React from 'react';
import {Link} from "react-router-dom"
import {Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {GET_BASED} from "../redux/types";

const Header = () => {
    const dispatch = useDispatch()
const {cart} = useSelector(s => s.cart)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5 py-3">
        <div className="container">

                <Link to="/" className="navbar-brand" >Navbar</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">

                </button>

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item ">
                           <Link to="/">Главная</Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/cart">Корзина</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/favorite">Избраннное</Link>
                        </li>
                    </ul>
                    <select onChange={(e) =>
                        dispatch({type: GET_BASED, payload: e.target.value})}>
                        <option value="USD">$</option>
                        <option value="RUB">₽</option>
                        <option value="SOM">сом</option>
                        <option value="EUR">€</option>
                    </select>
                    <Link to="/cart"><i className="fas fa-cart-plus" style={{fontSize:"30px"}}></i></Link>
                    <div className={`circle-cart text-center ${cart.length ? "d-block": "d-none"}`}

                    >{cart.length}</div>
                    <form className="form-inline my-2 my-lg-0 d-flex">
                        <input className="form-control mr-sm-2 mx-4" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" >Search</button>
                    </form>
                </div>

        </div>
        </nav>
    );
};

export default Header;