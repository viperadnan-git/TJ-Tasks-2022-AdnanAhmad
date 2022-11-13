import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import New from "./pages/New";
import Post from "./pages/Post";
import React from "react";
import Trends from "./pages/Trends";
import User from "./pages/User";

function App() {
    const isLoggedIn = localStorage.TOKEN ? true : false;

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/trends" element={<Trends />}></Route>
                <Route path="/user/:userid" element={<User />}></Route>
                <Route path="/post/:postid" element={<Post />}></Route>
                <Route path="/new" element={isLoggedIn ? <New></New> : <Navigate to="/login"></Navigate>}></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
