import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCash, removeCash} from "./redux/actions/CartActions"
import Catalog from "./components/Catalog";
import Layout from "./components/Layout";
import {Routes, Route} from "react-router-dom"
import Cart from "./components/Cart";
import Favorite from "./components/Favorite";
import ItemDetails from "./components/ItemDetails";
// useDispatch()
// useSelector()
// redux react-redux
function App() {



    return (
        <Layout>
            <div className="App">
            <Routes>
                <Route path="/" element={<Catalog/>}/>
                <Route path="/:id" element={<ItemDetails/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                <Route path="/favorite/:id" element={<ItemDetails/>}/>
            </Routes>
            </div>
        </Layout>
    );
}

export default App;
