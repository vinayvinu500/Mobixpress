import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './About';

function App() {
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');

    return (
        <Router>
            <div className="App">

                {/* Navigation Bar */}
                <nav className="navbar">
                    <span className="brand">Mobixpress</span>
                    <div className="nav-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={
                        <div>
                            {/* Main Header */}
                            <header className="App-header">
                                <h1>Elevate Your Mobile Repair Experience</h1>
                                <p>Your trusted partner for all mobile repair solutions.</p>
                            </header>

                            {/* About Us Component */}
                            <About />

                            {/* Phone Selection */}
                            <section className="phone-selection">
                                <h2>Select Your Phone</h2>
                                <div className="dropdowns">
                                    <select onChange={(e) => setBrand(e.target.value)}>
                                        <option value="">Select brand</option>
                                        <option value="apple">Apple</option>
                                        <option value="samsung">Samsung</option>
                                        {/* add other brands */}
                                    </select>
                                    <select onChange={(e) => setModel(e.target.value)}>
                                        <option value="">Select model</option>
                                        <option value="iphone12">iPhone 12</option>
                                        <option value="galaxyS21">Galaxy S21</option>
                                        {/* add other models */}
                                    </select>
                                </div>
                                <Link to={`/services/${brand}/${model}`} className="search-button">
                                    Search
                                </Link>
                            </section>

                            {/* Our Services */}
                            <section className="services">
                                <h2>Exclusive Services</h2>
                                <div className="service">
                                    <img src="/service1.jpg" alt="Fast Repair Service" />
                                    <h3>100 Days Warranty*</h3>
                                    <p>We are committed to providing exceptional service and stand behind the quality of our repairs. That’s why we offer a 100% warranty on every repair we undertake. Your satisfaction is our utmost priority, and we strive to exceed your expectations with every interaction.</p>
                                </div>
                                <div className="service">
                                    <h3>Doorstep Pickup & Delivery</h3>
                                    <p>EmobiXpress takes pride in offering a seamless and hassle-free experience. With our online mobile repairing booking system, you can easily schedule an appointment at your convenience. Our doorstep pickup and delivery services save you time and effort, allowing you to get your device repaired without leaving the comfort of your home.</p>
                                </div>
                                <div className="service">
                                    <h3>5+ Outlets in Alwar City</h3>
                                    <p>Building upon the solid foundation of our 10-year-old establishment, MobiXpress, EmobiXpress is our digital expansion aimed at providing even more convenience and accessibility to our valued customers. With a team of highly skilled technicians, state-of-the-art equipment, and a customer-centric approach, we are dedicated to delivering top-notch repair services.</p>
                                </div>
                            </section>

                            {/* Testimonials */}
                            <section className="testimonials">
                                <h2>Client Testimonials</h2>
                                <div className="testimonial">
                                    <p>"Impressive service quality. My phone feels brand new!"</p>
                                    <h4>- Satisfied Client</h4>
                                </div>
                            </section>

                            {/* Footer */}
                            <footer className="App-footer">
                                <div className="footer-content">
                                    <p>&copy; 2023 Mobixpress - All rights reserved.</p>
                                    <div className="social-media">
                                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/facebook-icon.png" alt="Facebook" />
                                        </a>
                                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/twitter-icon.png" alt="Twitter" />
                                        </a>
                                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                            <img src="/instagram-icon.png" alt="Instagram" />
                                        </a>
                                    </div>
                                </div>
                            </footer>
                        </div>
                    } />

                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
