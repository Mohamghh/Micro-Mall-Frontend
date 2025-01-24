import React from 'react'
import { Link } from 'react-router-dom'

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
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link href="/Products">Products</Link>
              <ul>
              <li><Link to="/Products">Products Shop</Link></li>
              <li><Link to="/AddProduct">Add New Product</Link></li>

              </ul>
            </li>
            <li>
              <Link to="/Order">Orders</Link>
            </li>

            <li>
  <Link to="/OrdersAdmin">Admin View</Link>
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
