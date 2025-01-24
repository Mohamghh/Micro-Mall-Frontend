import React, { useState, useEffect } from "react";
import axios from 'axios';
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";


const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null,  // Ajout de l'attribut image
  });

  // Définir un état pour le panier
  const [cart, setCart] = useState([]);

  // Charger le panier depuis le localStorage lorsque le composant est monté
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []); // Le tableau vide assure que l'effet se lance uniquement au montage

  const getCartSummary = () => {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return { totalItems, totalPrice };
  };

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Gérer le changement pour l'image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, image: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Créer un FormData pour inclure l'image dans la requête
    const formDataToSend = new FormData();
    formDataToSend.append("product", JSON.stringify({
      name: formData.name,
      description: formData.description,
      price: formData.price,
      stock: formData.stock
    }));
    formDataToSend.append("file", formData.image); // Ajouter l'image

    try {
      const response = await axios.post("http://localhost:8089/products/addproduct", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage("Product added successfully!");
      setFormData({ name: "", description: "", price: "", stock: "", image: null }); // Réinitialiser
    } catch (error) {
      console.error("Error adding product:", error);
      setMessage("Failed to add product. Please try again.");
    }
  };

  const { totalItems, totalPrice } = getCartSummary();  // Appeler getCartSummary ici

  return (
    <>
    
    <div>
        {/* header-area-start */}
        <header className="header sticky-active">
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
              <input id="popup-search" type="text" name="s" placeholder="Type keywords here..." />
            </form>
            <div className="search-close"><i className="fa-sharp fa-regular fa-xmark" /></div>
          </div>
        </div>
        {/* /#popup-search-box */}
        {/* ./ preloader */}
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
        <section className="page-header">
          <div className="shape"><img src="assets/img/shapes/page-header-shape.png" alt="shape" /></div>
          <div className="container">
            <div className="page-header-content">
              <h1 className="title">Add New Product</h1>
              <h4 className="sub-title">
                <span className="home">
                </span>
                <span className="icon"><i /></span>
                <span className="inner">
                 
                </span>
              </h4>
            </div>
          </div>
        </section>
        {/* ./ page-header */}

        <section className="contact-section pt-100 pb-100">
          <style>
            {`
              .form-header {
                text-align: left; /* Aligne le texte à gauche */
                margin-bottom: 8px; /* Ajoute un espace en dessous du titre */
                font-weight: bold; /* Rend le titre plus visible */
              }
            `}
          </style>
          <div className="container">
            <div className="row contact-wrap">
              <div className="col-lg-8 col-md-12">
                <div className="blog-contact-form form-2">
                  <div className="request-form">
                    <h2 className="form-title">Add a New Product</h2>
                    {message && <p>{message}</p>}
                    <form onSubmit={handleSubmit} className="form-horizontal">
                      <div className="form-group row">
                        <div className="col-md-6">
                          <div className="form-item">
                            <h4 className="form-header">Product Name</h4>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter product name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-item">
                            <h4 className="form-header">Price</h4>
                            <input
                              type="number"
                              name="price"
                              value={formData.price}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter price"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <div className="form-item">
                            <h4 className="form-header">Description</h4>
                            <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleChange}
                              cols={30}
                              rows={5}
                              className="form-control address"
                              placeholder="Enter product description"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="col-md-12">
                          <div className="form-item">
                            <h4 className="form-header">Stock</h4>
                            <input
                              type="number"
                              name="stock"
                              value={formData.stock}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="Enter stock quantity"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/* Champ pour télécharger l'image */}
                      <div className="form-group row">
                        <div className="col-md-12">
                          <div className="form-item">
                            <h4 className="form-header">Product Image</h4>
                            <input
                              type="file"
                              name="image"
                              onChange={handleImageChange}
                              className="form-control"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="submit-btn">
                        <button className="rr-primary-btn" type="submit">
                          Add Product
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="contact-content">
                  <div className="contact-info-box">
                    <h3 className="title">Opening Hours</h3>
                    <ul>
                      <li>Monday - Friday : 9am - 5pm <br />Weekend Closed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




    

        {/* ./ contact-section */}
                
        
        {/* ./ map-wrapper */}
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
  );
};

export default AddProduct;
