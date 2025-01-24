import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const Panier = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Récupérer les produits du panier depuis le localStorage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (id) => {
    // Supprimer un produit du panier
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getCartSummary = () => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = getCartSummary();

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateSubtotal = (price, quantity) => {
    return price * quantity;
  };

   // Sauvegarder les données du panier dans localStorage avant de naviguer
   const handleProceedToCheckout = () => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Sauvegarder le panier
    localStorage.setItem("totalPrice", JSON.stringify(totalPrice)); // Sauvegarder le total
  };

  return (
    <>
       
      <div>
        {/* header-area-start */}
        <header className="header sticky-active">
          <div className="top-bar">
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
        {/* ./ preloader */}
        <section className="page-header">
          <div className="shape"><img src="assets/img/shapes/page-header-shape.png" alt="shape" /></div>
          <div className="container">
            <div className="page-header-content">
              <h1 className="title">Panier</h1>
              <h4 className="sub-title">
                <span className="icon"><i className="" /></span>
              </h4>
            </div>
          </div>
        </section>
        {/* ./ page-header */}
        <section className="cart-section pt-130 pb-130">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="table-content cart-table">
                <table className="table mb-0">
          <thead>
            <tr>
              <th className="product-remove" />
              <th className="cart-product-name text-center">Products</th>
              <th className="product-price">Price</th>
              <th className="product-quantity">Quantity</th>
              <th className="product-subtotal">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td className="product-remove">
                  <button onClick={() => removeFromCart(product.id)}>
                    <i className="fa-sharp fa-regular fa-xmark" />
                  </button>
                </td>
                <td className="product-thumbnail">
                  <img
                    src={`data:${product.imageType};base64,${product.image}`}
                    alt={product.name}
                  />
                  <div className="product-thumbnail">
                    <h4 className="title">{product.name}</h4>
                  </div>
                </td>
                <td className="product-price">
                  <span className="amount">${product.price}</span>
                </td>
                <td className="product-quantity">
                  <input
                    type="number"
                    className="input-text qty text"
                    name="quantity"
                    value={product.quantity}
                    min={1}
                    onChange={(e) =>
                      updateQuantity(product.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td className="product-subtotal">
                  <span className="amount">
                    ${calculateSubtotal(product.price, product.quantity)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
                </div>
                <div className="cart-btn-wrap">
                  <div className="left-item">
                    <input type="text" className="form-control" placeholder="Coupon Code" />
                    <button className="rr-primary-btn">Apply Coupon</button>
                  </div>
                  <button className="rr-primary-btn update-btn">Update Cart</button>
                </div>
              </div>
              <div className="col-lg-4">
            <div className="checkout-wrapper">
              <div className="checkout-top checkout-item item-1">
                <h4 className="title">Cart Totals</h4>
              </div>
              <div className="checkout-total checkout-item">
                <h4 className="title">Total</h4>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <div className="checkout-proceed">
        <Link to="/Order" onClick={handleProceedToCheckout} className="rr-primary-btn checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
          </div>
            </div>
          </div>
        </section>
        {/* ./ cart-section */}
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
            <div className="container">
              <div className="row copyright-content">
                <div className="col-lg-6">
                  <div className="footer-img-wrap">
                    
                    
                  </div>
                </div>
                <div className="col-lg-6">
                  <p>Copyright &amp; Design 2024 <span>©Roiser</span>. All Right Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* ./ footer-section */}
        <div id="scroll-percentage"><span id="scroll-percentage-value" /></div>
      </div>

      
    </>
  );
};

export default Panier;