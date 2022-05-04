import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import Item from './components/Item'
import Customer from "./components/Customer";
import Trader from "./components/Trader";


function App() {

        return(
            <div>
                <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/item" element = {<Item/>}/>
                                <Route path="/customer" element = {<Customer/>}/>
                                <Route path="/trader" element={<Trader/>}/>
                        </Routes>
                </BrowserRouter>
        </div>
        );
}

export default App;