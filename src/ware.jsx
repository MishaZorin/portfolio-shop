import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './ware.css'

function Ware({ items, setItems }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <nav className="navbarMain">
                    <a href="#" className="logo" onClick={() => navigate('/')}>YELLOW<span>BLACK</span></a>
                    <div className="nav-icons">
                        <button className="icon-btn" onClick={() => navigate("/login")}>👤</button>
                        <button className="icon-btn">❤️</button>
                        <button className="icon-btn" >
                            🛒
                            <span className="cart-badge"></span>
                        </button>
                    </div>
                </nav>
                <div>
                    {items.map((item, itemIndex) => (
                        <div className="ware-card">
                            <div className="left-img">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="right-description">
                                <h1>{item.title}</h1>
                                <p className="description-text">{item.description}</p>
                                    <p className="price-tag">{item.price} ₽</p>
                                    {/* <button className='add' onClick={() => addToCart(item, itemIndex)}>Добавить!</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Ware
