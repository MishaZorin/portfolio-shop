import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

function Cart({ items, setItems, count, deleteCount }) {
    const [pay, setPay] = useState(0)
    
    const navigate = useNavigate();
    useEffect(() => {
        let summa = 0
        items.forEach(el => {
            summa += Number(el.price)
        })
        console.log(summa);
        
        setPay(summa)
    }, [items])
    const [inCartIndex, setInCartIndex] = useState(0)
    function deleteWare(inCartIndex) {
        setInCartIndex(inCartIndex)
        deleteCount(count - 1)
        setItems((c) => {
            let nextItem = [...c]
            nextItem.splice(inCartIndex, 1)
            return nextItem

        })
    }
    localStorage.setItem('pay', JSON.stringify(pay));

    return (
        <>

            <div className="container">
                <nav className="navbar">
                    <a href="#" className="logo" onClick={()=> navigate('/')}>KOR<span>ZINA</span></a>

                    {/* <div className="nav-links">
                        <a href="#">Новинки</a>
                        <a href="#">Мужское</a>
                        <a href="#">Женское</a>
                        <a href="#">Аксессуары</a>
                        <a href="#">Sale</a>
                    </div> */}

                    <div className="nav-icons">
                        <button className="icon-btn">🔍</button>
                        <button className="icon-btn" onClick={() => navigate("/login")}>👤</button>
                        <button className="icon-btn">❤️</button>
                        <button className="icon-btn" >
                            🛒
                            <span className="cart-badge">{count}</span>
                        </button>
                    </div>
                </nav>

                <div className="center">
                    <div className="cart">
                        {items.map((inCart, inCartIndex) => (
                            <div
                                key={inCart.title + inCart.price + inCartIndex}
                                className="product-card-cart"
                            >
                                <div className="product-image">
                                    <img src={inCart.image} alt={inCart.title} />
                                </div>

                                <div className="product-info">
                                    <div className="product-title">
                                        {inCart.title}
                                    </div>

                                    <div className="product-price">
                                        <span className="current-price">
                                            {inCart.price} $
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

                    <div className="payment">
                        <form className='bank-form'>
                            <h2>💰 Банковские данные</h2>
                            <input type="text" placeholder="Номер карты"></input>
                            <input type="text" placeholder="Имя владельца"></input>
                            <div className="row">
                                <input type="text" placeholder="ММ/ГГ"></input>
                                <input type="text" placeholder="CVV"></input>
                            </div>

                            <input type="text" placeholder="Номер счета"></input>
                            <input type="text" placeholder="IBAN"></input>
                            <p style={{ textAlign: 'center' }}>К оплате: {pay} </p>

                            <button type="submit">💳 Сохранить</button>
                        </form>
                    </div>
                </div>

            </div>


        </>
    )
}

export default Cart
