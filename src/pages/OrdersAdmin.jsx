import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

const OrdersAdmin = () => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
      // Récupère les commandes avec les détails utilisateur depuis localStorage
      const storedOrders = JSON.parse(localStorage.getItem("ordersWithUser")) || [];
      setOrders(storedOrders);
    }, []);
  
    // Fonction pour calculer le nombre total d'articles et le prix total
    const getOrderSummary = () => {
      const totalItems = orders.reduce((acc, order) => acc + order.quantity, 0);
      const totalPrice = orders.reduce((acc, order) => acc + order.totalPrice, 0);
      return { totalItems, totalPrice };
    };
  
    const { totalItems, totalPrice } = getOrderSummary();
  
    return (
    <>
    
       
      <div>
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
              <h1 className="title">Admin view Orders</h1>
              <h4 className="sub-title">
                <span className="icon"><i className="" /></span>
                
                
                
              </h4>
            </div>
          </div>
        </section>
        {/* ./ page-header */}
        <section className="cart-section pt-130 pb-130">
          <div className="container">
            <div className="table-content cart-table table-2">
            <table className="table mb-0">
        <thead>
          <tr>
            <th className="product-remove" />
            <th className="cart-product-name text-center">Product name</th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th>User Details</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="product-remove">
                <button>
                  <i className="fa-sharp fa-regular fa-xmark" />
                </button>
              </td>
              <td className="product-thumbnail">
                <img src={order.productImage} alt={order.productName} />
                <div className="product-thumbnail">
                  <span className="category">{order.productCategory}</span>
                  <h4 className="title">{order.productName}</h4> {/* Affichage du nom du produit */}
                </div>
              </td>
              <td className="product-price">
                <span className="amount">${order.totalPrice.toFixed(2)}</span>
              </td>
              <td className="product-quantity">{order.quantity}</td>
              <td>
                <div>
                  <p>
                    <strong>Name:</strong> {order.userDetails.firstName} {order.userDetails.lastName}
                  </p>
                  <p>
                    <strong>Email:</strong> {order.userDetails.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {order.userDetails.phone}
                  </p>
                  <p>
                    <strong>Address:</strong> {order.userDetails.address}
                  </p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

export default OrdersAdmin;