import React from 'react'
import Navigation from '../components/Navigation'

function Homepage() {
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
                  <div className="header-logo d-lg-block">
                    <a href="index.html">
                      <img src="assets/img/logo/logo-1.png" alt="Logo" />
                    </a>
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
                      <a href="cart.html" className="icon">
                        <i className="fa-light fa-bag-shopping" />
                        <span>2</span>
                      </a>
                      <div className="content">
                        <span>Your cart,</span>
                        <h5 className="number">$1280.00</h5>
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
              <h1 className="title">MicroMall Your Market</h1>
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
        <section className="shop-grid-2 pt-100 pb-100">
          <div className="container">
            <div className="row gy-4">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-1.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">Monica Diara Party Dress</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$250.00</span>$157.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-2.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">Onima Black Flower Sandal</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$450.00</span>$257.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-3.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">Poncho Sweater international</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$550.00</span>$427.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-7.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-8.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-9.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-10.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="shop-item">
                  <div className="shop-thumb">
                    <div className="overlay" />
                    <img src="assets/img/shop/shop-11.png" alt="shop" />
                    <span className="sale">New</span>
                    <ul className="shop-list">
                      <li><a href="#"><i className="fa-regular fa-cart-shopping" /></a></li>
                      <li><a href="#"><i className="fa-light fa-heart" /></a></li>
                      <li><a href="#"><i className="fa-light fa-eye" /></a></li>
                    </ul>
                  </div>
                  <div className="shop-content">
                    <span className="category">Levi’s Cotton</span>
                    <h3 className="title"><a href="shop-details.html">D’valo Office Cotton Suite</a></h3>
                    <div className="review-wrap">
                      <ul className="review">
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                        <li><i className="fa-solid fa-star" /></li>
                      </ul>
                      <span>(15 Reviews)</span>
                    </div>
                    <span className="price"> <span className="offer">$350.00</span>$257.00</span>
                  </div>
                </div>
              </div>
            </div>
            <ul className="pagination-wrap justify-content-center mt-50">
              <li><a href="#">1</a></li>
              <li><a href="#" className="active">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#"><i className="fa-regular fa-chevrons-right" /></a></li>
            </ul>
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
            <div className="row footer-widget-wrap pb-60">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">About Store</h3>
                  </div>
                  <div className="footer-contact">
                    <div className="icon"><i className="fa-sharp fa-solid fa-phone-rotary" /></div>
                    <div className="content">
                      <span>Have Question? Call Us 24/7</span>
                      <a href="tel:+25836922569">+258 3692 2569</a>
                    </div>
                  </div>
                  <ul className="schedule-list">
                    <li><span>Monday - Friday:</span>8:00am - 6:00pm</li>
                    <li><span>Saturday:</span>8:00am - 6:00pm</li>
                    <li><span>Sunday</span> Service Close</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">Our Stores</h3>
                  </div>
                  <ul className="footer-list">
                    <li><a href="contact.html">New York</a></li>
                    <li><a href="contact.html">London SF</a></li>
                    <li><a href="contact.html">Los Angele</a></li>
                    <li><a href="contact.html">Chicago</a></li>
                    <li><a href="contact.html">Las Vegas</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">Shop Categories</h3>
                  </div>
                  <ul className="footer-list">
                    <li><a href="contact.html">New Arrivals</a></li>
                    <li><a href="contact.html">Best Selling</a></li>
                    <li><a href="contact.html">Vegetables</a></li>
                    <li><a href="contact.html">Fresh Meat</a></li>
                    <li><a href="contact.html">Fresh Seafood</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6">
                <div className="footer-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">Useful Links</h3>
                  </div>
                  <ul className="footer-list">
                    <li><a href="contact.html">Privacy Policy</a></li>
                    <li><a href="contact.html">Terms &amp; Conditions</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                    <li><a href="contact.html">Latest News</a></li>
                    <li><a href="contact.html">Our Sitemaps</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <div className="widget-header">
                    <h3 className="widget-title">Our Newsletter</h3>
                  </div>
                  <div className="news-form-wrap">
                    <p className="mb-20">Subscribe to the mailing list to receive updates one the new arrivals and other discounts</p>
                    <div className="footer-form mb-20">
                      <form action="#" className="rr-subscribe-form">
                        <input className="form-control" type="email" name="email" placeholder="Email address" />
                        <input type="hidden" name="action" defaultValue="mailchimpsubscribe" />
                        <button className="submit">Subscribe</button>
                        <div className="clearfix" />
                      </form>
                    </div>
                    <p className="mb-0">I would like to receive news and special offer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-area">
            <div className="container">
              <div className="row copyright-content">
                <div className="col-lg-6">
                  <div className="footer-img-wrap">
                    <span>Payment System:</span>
                    <div className="footer-img"><a href="#"><img src="assets/img/images/footer-img-1.png" alt="img" /></a></div>
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
      </div>


    
    </>
  )
}

export default Homepage