import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

function Login({count}) {
   const [c,setC] = useState(0)
    const navigate = useNavigate();

    return (
        <>

            <div className="container">
                <nav className="navbarMain">
                  <a href="#" className="logo" onClick={() => navigate('/')}>YELLOW<span>BLACK</span></a>


                    <div className="nav-icons">
                        <button className="icon-btn" >👤</button>
                        <button className="icon-btn" onClick={() => navigate("/fav")}>❤️</button>
                        <button className="icon-btn" onClick={() => navigate("/cart")}>
                            🛒
                            <span className="cart-badge">{count}</span>
                        </button>
                    </div>
                </nav>
                <div className="create-acc">
                    <form action="">
                    <p>Создать Аккаунт</p>
                    <input type="text" placeholder='Имя:'/>
                    <input type="email" placeholder='E-mail:' />
                    <input type="password" placeholder='Создайте пароль:' />
                    <button className='add'>Создать Аккаунт!</button>
                </form>
                </div>
                
                
            

            </div>


        </>
    )
}

export default Login
