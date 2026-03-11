import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './ware.css'
function Ware({ items, setItems, sizes, setSizes, setCount, count, onAdd }) {
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <nav className="navbarMain">
                    <a href="#" className="logo" onClick={() => navigate('/')}>YELLOW<span>BLACK</span></a>
                    <div className="nav-icons">
                        <button className="icon-btn" onClick={() => navigate("/login")}>👤</button>
                        <button className="icon-btn">❤️</button>
                        <button className="icon-btn" onClick={() => navigate("/cart")} >
                            🛒
                            <span className="cart-badge">{count}</span>
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
                                {sizes.map((size, sizeIndex) => (
                                    <div className='sizes-line'>
                                        <button className='size-line'>{size.size1}</button>
                                        <button className='size-line'>{size.size2}</button>
                                        <button className='size-line'>{size.size3}</button>
                                    </div>

                                ))}
                                <p className="price-tag">{item.price} ₽</p>
                                <button className='add' onClick={() => {
                                    onAdd(item);
                                    setCount(count + 1);
                                }}>
                                    Добавить
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Ware
