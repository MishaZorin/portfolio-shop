import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import Cart from './cart.jsx'
import Login from './login.jsx'
import Ware from './ware.jsx'
// import Menu from './menu.jsx'
import AnimeHoodie from './animeHoodie.png'
import AnimeShirt from './animeShirt.png'
import Grifit from './grifit.png'
// import Hudi from './hudi.jpg'

function App() {
  const navigate = useNavigate();
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [showProduct, setShowProduct] = useState([])
  const [wareInCart, setWareInCart] = useState(() => {
    const savedWares = localStorage.getItem('wareInCart')

    if (savedWares !== null) {
      return JSON.parse(savedWares)
    }

    return [

    ]
  })

  useEffect(() => {
    localStorage.setItem('wareInCart', JSON.stringify(wareInCart))
  }, [wareInCart])
  const [inputValue, setInputValue] = useState('')
  const [wares, setWares] = useState([
    {
      title: "Худи Oversize",
      category: "Футболки",
      price: '1999',
      sizes: ["S", "M", "L", "XL"],
      colors: ["черный", "белый", "серый"],
      image: AnimeHoodie,
      description: "Хлопковая oversize футболка свободного кроя",
      inStock: true,
    },
    {
      title: "Футболка Anime",
      category: "Джинсы",
      price: '4599',
      sizes: ["M", "L", "XL"],
      colors: ["синий", "черный"],
      image: AnimeShirt,
      description: "Классические джинсы slim fit на каждый день",
      inStock: true,
    },
    {
      title: "Худи Griffit",
      category: "Худи",
      price: '3999',
      sizes: ["S", "M", "L"],
      colors: ["бежевый", "хаки"],
      image: Grifit,
      description: "Теплое худи ",
      inStock: false,
    }

  ])
  function addToCart(ware) {
    setCount(count + 1)
    setWareInCart([...wareInCart, ware])
    console.log(wareInCart);
  }
  function showWare(ware) {
    setShowProduct([ware])

  }
  const filteredWares = wares.filter(ware => {
    return ware.title.toLowerCase().includes(inputValue.toLowerCase())
  })


  return (
    <>
      <Routes>
        <Route path="/" element={
          <div className="container">
            <nav className="navbarMain">
              <a href="#" className="logo" onClick={() => navigate('/')}>YELLOW<span>BLACK</span></a>
              <div className="nav-links">
                <input type="text" placeholder='🔍 Я хочу...' value={inputValue} onChange={(event) => {
                  setInputValue(event.target.value)
                }} />

              </div>

              <div className="nav-icons">
                <button className="icon-btn" onClick={() => navigate("/login")}>Аккаунт</button>
                <button className="icon-btn">Избранное</button>
                <button className="icon-btn" onClick={() => navigate("/cart")}>
                  Корзина
                  <span className="cart-badge">{count}</span>
                </button>
              </div>
            </nav>


            <section className="hero">
              <h1>ЧЕРНЫЙ <span>С ЖЕЛТЫМ</span></h1>
              <p>Минималистичная одежда в желто-черной гамме</p>
              <div className="hero-buttons">
                <a href="" className="btn btn-primary" onClick={() => navigate("/cart")}>Купить</a>
                <a href="" className="btn btn-outline">Коллекция</a>
              </div>
            </section>


            <div className="products-grid">

              {filteredWares.map((ware, wareIndex) => (
                <div className="product-card">
                  <div className="product-image" onClick={() => {
                    showWare(ware);
                    navigate("/ware");
                  }}>
                    <img src={ware.image} alt={ware.title} />
                  </div>
                  <div className="product-info">
                    <div className="product-title">{ware.title}</div>
                    <div className="product-price">
                      <span className="current-price">{ware.price} $</span>

                    </div>
                  </div>
                  <button className='add' onClick={() => addToCart(ware, wareIndex)}>Добавить!</button>

                </div>
              ))}
            </div>
            <footer className="footer">
              <div className="footer-grid">
                <div className="footer-col">
                  <h4>МАГАЗИН</h4>
                  <a href="#">О нас</a>
                  <a href="#">Контакты</a>
                  <a href="#">Доставка</a>
                </div>
                <div className="footer-col">
                  <h4>ПОМОЩЬ</h4>
                  <a href="#">FAQ</a>
                  <a href="#">Размеры</a>
                  <a href="#">Возврат</a>
                </div>
                <div className="footer-col">
                  <h4>ПОДПИСКА</h4>
                  <div className="newsletter-input">
                    <input type="email" placeholder="Email" />
                    <button>→</button>
                  </div>
                </div>
              </div>

            </footer>
          </div>
        } />

        <Route path="/cart" element={<Cart items={wareInCart} setItems={setWareInCart} count={count} deleteCount={setCount} />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/ware" element={<Ware items={showProduct} setItems={setShowProduct}></Ware>} />
      </Routes>






    </>
  )
}

export default App
