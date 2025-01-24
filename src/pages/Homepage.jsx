import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Récupérer les produits depuis le backend
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8089/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    // Récupérer le panier depuis le localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    // Récupérer le panier du localStorage ou initialiser un tableau vide
    let updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex((item) => item.id === product.id);
    
    if (existingProductIndex >= 0) {
      // Si le produit est déjà dans le panier, augmenter la quantité
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      // Ajouter le produit au panier
      updatedCart.push({ ...product, quantity: 1 });
    }

    // Sauvegarder le panier dans le localStorage et mettre à jour l'état
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setCart(updatedCart);
  };

  const getCartSummary = () => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = getCartSummary();

  
  return (

    <>

    <div>
            {/* header-area-start */}
            <header className="header sticky-active">
              <div className="top-bar">
                <div className="container">
                </div>
              </div>
              <div className="header-middle">
                <div className="container">
                  <div className="header-middle-inner">
                    <div className="header-middle-left">
<div className="header-logo mobile-logo" style={{ display: 'flex', alignItems: 'center' }}>
  <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
    <img src="assets/img/logo1.png" alt="Logo" style={{ maxHeight: '50px', marginRight: '10px' }} />
    <span style={{ fontWeight: 'bold', color: '#000000', fontSize: '24px' }}>MicroMall</span>
  </Link>
</div>
                      <div className="category-form-wrap">
                        <div className="nice-select select-control country" tabIndex={0}>
                          <span className="current">ALL Categories</span>
                          <ul className="list">
                            <li data-value className="option selected focus">ALL Categories</li>
                            <li data-value="vdt" className="option">Fashion</li>
                            <li data-value="can" className="option">Organic</li>
                            <li data-value="uk" className="option">Furniture</li>
                          </ul>
                        </div>
                        <form className="header-form" action="mail.php">
                          <input className="form-control" type="text" name="search" placeholder="Search here..." />
                          <button className="submit rr-primary-btn">Search here</button>
                        </form>
                      </div>
                    </div>
                    <div className="header-middle-right">
                      <ul className="contact-item-list">
                        <li>
                          <a href="wishlist.html" className="icon">
                            <i className="fa-sharp fa-regular fa-heart" />
                          </a>
                        </li>
                        <li>
            <Link to="/Panier" className="icon">
              <i className="fa-light fa-bag-shopping" />
              {totalItems > 0 && <span>{totalItems}</span>}
            </Link>
            <div className="content">
              <span>Your cart,</span>
              <h5 className="number">${totalPrice.toFixed(2)}</h5>
            </div>
          </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <Navigation />
            </header>
            {/* /.Main Header */}
            <div id="popup-search-box">
              <div className="box-inner-wrap d-flex align-items-center">
                <form id="form" action="#" method="get" role="search">
                  <input id="popup-search" type="text" name="search" placeholder="Type keywords here..." />
                </form>
                <div className="search-close"><i className="fa-sharp fa-regular fa-xmark" /></div>
              </div>
            </div>
            {/* /#popup-search-box */}
            <div className="mobile-side-menu">
              <div className="side-menu-content">
                <div className="side-menu-head">
                  <a href="index.html"><img src="assets/img/logo/logo-1.png" alt="logo" /></a>
                  <button className="mobile-side-menu-close"><i className="fa-regular fa-xmark" /></button>
                </div>
                <div className="side-menu-wrap" />
                <ul className="side-menu-list">
                  <li><i className="fa-light fa-location-dot" />Address : <span>Amsterdam, 109-74</span></li>
                  <li><i className="fa-light fa-phone" />Phone : <a href="tel:+01569896654">+01 569 896 654</a></li>
                  <li><i className="fa-light fa-envelope" />Email : <a href="mailto:info@example.com">info@example.com</a></li>
                </ul>
              </div>
            </div>
            {/* /.mobile-side-menu */}
            <div id="preloader">
  <div className="preloader-close">X</div>
  <div className="sk-three-bounce">
    <div className="sk-child sk-bounce1" />
    <div className="sk-child sk-bounce2" />
    <div className="sk-child sk-bounce3" />
  </div>
</div>
            {/* ./ preloader */}
            <section className="page-header">
              <div className="shape"><img src="assets/img/shapes/page-header-shape.png" alt="shape" /></div>
              <div className="container">
                <div className="page-header-content">
                  <h1 className="title">MicroMall Your Marketplace</h1>
                  <h4 className="sub-title">
                    <span className="home">
                      <a href="#">
                       
                      </a>
                    </span>
                    <span className="icon"><i  /></span>
                    <span className="inner">
                     
                    </span>
                  </h4>
                </div>
              </div>
            </section>
            {/* ./ page-header */}
            <section className="shop-section pt-100 pb-100">
            <style>
       {`
       
        /* Partie blanche sous l'image */
        .shop-item .shop-content {
          min-height: 200px; /* Assurez-vous que la zone blanche est toujours d'une hauteur fixe */
        }
        `}
    </style>

      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-md-6">
              <div className="shop-item">
                <div className="shop-thumb">
                  <img
                    src={`data:${product.imageType};base64,${product.image}`}
                    alt={product.name}
                  />
                  <ul className="shop-list">
                    <li>
                      <a href="#" onClick={() => addToCart(product)}>
                        <i className="fa-regular fa-cart-shopping" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="shop-content">
                  <span className="category">{product.name}</span>
                  <h3 className="title">{product.description}</h3>
                  <div className="review-wrap">
  <ul className="review">
    {/* Affichage des étoiles (ici pour simplification 5 étoiles par défaut) */}
    <li><i className="fa-solid fa-star" /></li>
    <li><i className="fa-solid fa-star" /></li>
    <li><i className="fa-solid fa-star" /></li>
    <li><i className="fa-solid fa-star" /></li>
    <li><i className="fa-solid fa-star" /></li>
  </ul>
  <span>(15 Reviews)</span>
</div>
                  <span className="price">${product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

            {/* ./ shop-grid */}
            <footer className="footer-section bg-grey pt-60">
              <div className="container">
                <div className="footer-items">
                  <div className="footer-item">
                    <div className="icon">
                      <img src="assets/img/icon/footer-1.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="title">Free Shipping</h4>
                      <span>Free shipping on orders over $65</span>
                    </div>
                  </div>
                  <div className="footer-item">
                    <div className="icon">
                      <img src="assets/img/icon/footer-2.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="title">Free Returns</h4>
                      <span>30-days free return polic</span>
                    </div>
                  </div>
                  <div className="footer-item">
                    <div className="icon">
                      <img src="assets/img/icon/footer-3.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="title">Secured Payments</h4>
                      <span>We accept all major credit card</span>
                    </div>
                  </div>
                  <div className="footer-item item-2">
                    <div className="icon">
                      <img src="assets/img/icon/footer-4.png" alt="icon" />
                    </div>
                    <div className="content">
                      <h4 className="title">Customer Service</h4>
                      <span>Top notch customer service</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="copyright-area">
              </div>
            </footer>
            {/* ./ footer-section */}
            <div id="scroll-percentage"><span id="scroll-percentage-value" /></div>
            {/*scrollup*/}
          </div>
    
    
        
        </>
      );
    };
    
    export default Products;