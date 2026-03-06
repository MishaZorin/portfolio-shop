import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

function Menu() {
    const navigate = useNavigate();
   

    return (
        <>
        
            <div className="container">
                <div className="nav-icons">
                <button className="icon-btn" onClick={() => navigate("/login")}>👤</button>
                <button className="icon-btn">❤️</button>
                <button className="icon-btn" onClick={() => navigate("/cart")}>
                  🛒
                  <span className="cart-badge">

                  </span>
                </button>
              </div>
               
            </div>
        </>
    )
}

export default Menu
