import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

function Favourite({items,setItems}) {
    const navigate = useNavigate();

    return (
        <>

            <div className="container">
                <nav className="navbarMain">
                  <a href="#" className="logo" onClick={() => navigate('/')}>YELLOW<span>BLACK</span></a>


                    <div className="nav-icons">
                        <button className="icon-btn" onClick={()=> navigate("/login")}>👤</button>
                        <button className="icon-btn">❤️</button>
                        <button className="icon-btn" onClick={() => navigate("/cart")}>
                            🛒
                            <span className="cart-badge"></span>
                        </button>
                    </div>
                </nav>
              <div className='fav-wares'>
                  {items.map((inFav, inFavIndex) => (
                            <div
                                key={inFav.title + inFav.price + inFavIndex}
                                className="product-card-cart"
                            >
                                <div className="product-image">
                                    <img src={inFav.image} alt={inFav.title} />
                                </div>
                                <div className="product-info">
                                    <div className="product-title">
                                        {inFav.title}
                                    </div>

                                    <div className="product-price">
                                        <span className="current-price">
                                            {inFav.price} ₽
                                        </span>

                                        <button
                                            onClick={() => deleteWare(inCartIndex)}
                                            className="add"
                                        >
                                            Убрать
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
              </div>
                
                
            

            </div>


        </>
    )
}

export default Favourite
