import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";


const Order = () => {
    // Définir un état pour le panier
    const [cart, setCart] = useState([]);
  
    // Récupérer le panier depuis le localStorage lorsque le composant est monté
    useEffect(() => {
      const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(storedCart);
    }, []); // Le tableau vide assure que l'effet se lance uniquement au montage
  
    const shippingCost = 5;
  
    // Fonction pour obtenir les totaux du panier
    const getCartSummary = () => {
      const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
      const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      return { totalItems, totalPrice };
    };
  
    const { totalItems, totalPrice } = getCartSummary();
  
    const finalTotal = totalPrice + shippingCost;
  
    const [agreed, setAgreed] = useState(false);
    const [billingDetails, setBillingDetails] = useState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      address: "",
    });
  
    // Fonction pour gérer les changements dans le formulaire
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setBillingDetails((prev) => ({ ...prev, [name]: value }));
    };
  
    // Fonction pour créer une commande
    const handlePlaceOrder = async () => {
      if (!agreed) {
        alert("You need to agree to the terms and conditions!");
        return;
      }
  
      if (
        !billingDetails.firstName ||
        !billingDetails.lastName ||
        !billingDetails.phone ||
        !billingDetails.email ||
        !billingDetails.address
      ) {
        alert("Please fill in all billing details!");
        return;
      }
  
      try {
        const orders = []; // Collecte des ordres avec les informations utilisateur
  
        for (const item of cart) {
          const orderData = {
            userId: 1, // ID utilisateur fictif
            productId: item.id,
            quantity: item.quantity,
            totalPrice: item.price * item.quantity + shippingCost,
            productName: item.name,
            productCategory: item.category,
            productImage: item.image, // Ajoute les informations nécessaires pour l'affichage
            userDetails: {
              firstName: billingDetails.firstName,
              lastName: billingDetails.lastName,
              email: billingDetails.email,
              phone: billingDetails.phone,
              address: billingDetails.address,
            },
          };
  
          // Simule l'envoi au backend et garde les informations utilisateur en local
          const response = await axios.post(
            "http://localhost:8088/orders/addorder",
            orderData
          );
  
          // Ajoute les détails utilisateur à l'ordre (uniquement côté frontend)
          orders.push({ ...response.data, userDetails: { ...billingDetails } });
        }
  
        // Sauvegarde les ordres avec les détails utilisateur dans localStorage
        localStorage.setItem("ordersWithUser", JSON.stringify(orders));
  
        alert("Your order has been successfully placed!");
        localStorage.removeItem("cart");
        localStorage.removeItem("totalPrice");
      } catch (error) {
        console.error("Error placing order:", error);
        alert("Failed to place your order. Please try again.");
      }
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
              <h1 className="title">Orders</h1>
              <h4 className="sub-title">
                <span className="icon"><i className="" /></span>
              </h4>
            </div>
          </div>
        </section>
        {/* ./ page-header */}
        <section className="checkout-section pt-100 pb-100">
          <div className="container">
            <div className="checkout-top">
              <div className="coupon-list">
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
              <div className="checkout-left">
  <h3 className="form-header">Billing Details</h3>
  <form>
    <div className="checkout-form-wrap">
      <div className="form-group row">
        <div className="col-md-12">
          <div className="form-item">
            <h4 className="form-title">Email Address*</h4>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              value={billingDetails.email}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-6">
          <div className="form-item name">
            <h4 className="form-title">First Name*</h4>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="form-control"
              value={billingDetails.firstName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-item">
            <h4 className="form-title">Last Name*</h4>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="form-control"
              value={billingDetails.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-12">
          <div className="form-item">
            <h4 className="form-title">Street Address*</h4>
            <input
              type="text"
              id="street"
              name="address"
              className="form-control street-control"
              placeholder="House number and street number"
              value={billingDetails.address}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              id="apartment"
              name="apartment"
              className="form-control street-control-2"
              placeholder="Apartment, suite, unit, etc. (optional)"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className="form-group row">
        <div className="col-md-12">
          <div className="form-item">
            <h4 className="form-title">Phone*</h4>
            <input
              type="text"
              id="phone"
              name="phone"
              className="form-control"
              value={billingDetails.phone}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
      </div>
    </div>
  </form>
</div>
              </div>
              <div className="col-lg-6 col-md-12">
              <div className="checkout-right">
          <h3 className="form-header">Your Order</h3>
          <div className="order-box">
            <div className="order-items">
              <div className="order-item item-1">
                <div className="order-left">
                  <span className="product">Product</span>
                </div>
                <div className="order-right">
                  <span className="price">Price</span>
                </div>
              </div>

              {cart.map((item) => (
                <div className="order-item" key={item.id}>
                  <div className="order-left">
                    <div className="order-img">
                      <img
                        src={`data:${item.imageType};base64,${item.image}`}
                        alt={item.name}
                      />
                    </div>
                  </div>
                  <div className="order-right">
                    <div className="content">
                      <span className="category">{item.name}</span>
                      <h4 className="title">{item.description}</h4>
                    </div>
                    <span className="price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}

              <div className="order-item item-1">
                <div className="order-left">
                  <span className="left-title">Shipping</span>
                </div>
                <div className="order-right">
                  <span className="right-title">
                    <span>Flat rate:</span>${shippingCost.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="order-item item-1">
                <div className="order-left">
                  <span className="left-title">Total Price:</span>
                </div>
                <div className="order-right">
                  <span className="right-title title-2">
                    ${finalTotal.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div className="payment-option-wrap">
              <div className="payment-option">
                <div className="shipping-option">
                  <input
                    id="free_shipping"
                    type="radio"
                    name="shipping"
                  />
                  <label htmlFor="free_shipping">Cash On Delivery</label>
                </div>
              </div>
              <p className="desc">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our <span>privacy policy.</span>
              </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexCheckDefault"
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckDefault"
                >
                  I have read and agree terms and conditions *
                </label>
              </div>
              <button
                className="rr-primary-btn order-btn"
                onClick={handlePlaceOrder}
              >
                Place Your Order
              </button>
            </div>
          </div>
        </div>
        </div>
        </div>
        </div>
        </section>
        {/* ./ checkout-section */}
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
        {/*scrollup*/}
        {/* JS here */}
      </div>
 
    
    
    </>
  )
}

export default Order