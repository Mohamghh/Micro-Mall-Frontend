import React from 'react'

export default function Navigation() {
  return (
    <div className="primary-header">
  <div className="container">
    <div className="primary-header-inner">
      <div className="header-logo mobile-logo">
        <a href="index.html">
          <img src="assets/img/logo1.png" alt="Logo" />
          <span class="logo-text">MicroMall</span>
        </a>
      </div>
      <div className="header-menu-wrap">
        <div className="mobile-menu-items">
          <ul>
            <li className="menu-item-has-children active">
              <a href="index.html">Home</a>
              <ul>
                <li><a href="index.html">Fashion Home</a></li>
                <li><a href="index-2.html">Grocery Home</a></li>
                <li><a href="index-3.html">Furniture</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="shop.html">Shop</a>
              <ul>
                <li><a href="shop.html">Shop</a></li>
                <li><a href="shop-grid.html">Shop Grid</a></li>
                <li><a href="shop-details.html">Shop Details</a></li>
                <li><a href="cart.html">Cart</a></li>
                <li><a href="wishlist.html">Wishlist</a></li>
                <li><a href="checkout.html">Checkout</a></li>
              </ul>
            </li>
            <li>
              <a href="shop-grid.html">Women</a>
            </li>
            <li>
              <a href="shop-grid.html">men</a>
            </li>
            <li className="menu-item-has-children">
              <a href="#">Pages</a>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="login.html">Login</a></li>
                <li><a href="register.html">Register</a></li>
                <li><a href="faq.html">Faq</a></li>
                <li><a href="error.html">404 Error</a></li>
              </ul>
            </li>
            <li className="menu-item-has-children">
              <a href="blog-grid.html">Blog</a>
              <ul>
                <li><a href="blog-grid.html">Blog Grid</a></li>
                <li><a href="blog-grid-2.html">Blog list</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
      {/* /.header-menu-wrap */}
      <div className="header-right-wrap">
        <div className="header-right">
          <span>Get 30% Discount Now <span>Sale</span></span>
          <div className="header-right-item">
            <a href="javascript:void(0)" className="mobile-side-menu-toggle"><i className="fa-sharp fa-solid fa-bars" /></a>
          </div>
        </div>
        {/* /.header-right */}
      </div>
    </div>
    {/* /.primary-header-inner */}
  </div>
</div>
  )
}
