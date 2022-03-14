import './App.css';
import Home from "./home/Home";
import Navbar from "./components/header/Navbar";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import New from "./components/forms/New";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import React, {useState} from "react";
import StockTable from "./table/StockTable";

function App() {

    // GET /stocks?category={?}
    const [category, setCategory]=useState([]);
    const [stocks, setStocks] = useState([])

    const onCategoryClicked = (category) => {
        console.log(category)

        // guardar la categoría (useState)

        fetch(`http://localhost:8081/stocks?category=${category}`)
            .then(r => r.json())
            .then(datos => setStocks(datos))




    }

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home onCategoryClicked={onCategoryClicked}/>} />
                <Route path="/new" element={<New/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/stocks" element={<StockTable stocks={stocks}  />}/>
                <Route path='*' element={<Navigate replace to="/" />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
