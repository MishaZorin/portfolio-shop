import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

function Ware({ items, setItems }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <nav className="navbarMain">
                    <a href="#" className="logo" onClick={() => navigate('/')}>KOR<span>ZINA</span></a>
                    <div className="nav-icons">
                        <button className="icon-btn">🔍</button>
                        <button className="icon-btn" onClick={() => navigate("/login")}>👤</button>
                        <button className="icon-btn">❤️</button>
                        <button className="icon-btn" >
                            🛒
                            <span className="cart-badge"></span>
                        </button>
                    </div>
                </nav>
                <div className="ware-card">
                    {items.map((item, itemIndex) => (
                        <div>
                            <div className="left-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="right-description">
                                {item.description}
                            </div>
                        </div>
                    ))}


                </div>



            </div>


        </>
    )
}

export default Ware
