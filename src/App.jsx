import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/login";
import Cars from "./components/cars/cars";

const App = () => {
    return (
        <>
            <h1 className="text-center my-2">Learn react-router-dom</h1>
            <Routes>
                <Route path="" element={<Login/>}/>
                <Route path="cars" element={<Cars/>}/>
            </Routes>
        </>
    );
};

export default App;
