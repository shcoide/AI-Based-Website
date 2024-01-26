import React, { useState, useEffect } from 'react';
import './navbar.css';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import $ from 'jquery';
import '@fortawesome/fontawesome-free/css/all.css';

const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('');

  function animation() {
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + 'px',
      left: itemPosNewAnimLeft.left + 'px',
      height: activeWidthNewAnimHeight + 'px',
      width: activeWidthNewAnimWidth + 'px',
    });
    $("#navbarSupportedContent").on('click', 'li', function (e) {
      $('#navbarSupportedContent ul li').removeClass('active');
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + 'px',
        left: itemPosNewAnimLeft.left + 'px',
        height: activeWidthNewAnimHeight + 'px',
        width: activeWidthNewAnimWidth + 'px',
      });
    });
  }

  useEffect(() => {
    // Set the active link based on the current location
    const pathname = location.pathname;
    setActiveLink(pathname);

    animation();
    $(window).on('resize', function () {
      setTimeout(function () {
        animation();
      }, 500);
    });
  }, [location.pathname]); // Re-run effect when location changes

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Web Solutions
      </NavLink>
      <button
        className="navbar-toggler"
        onClick={() => {
          setTimeout(function () {
            animation();
          });
        }}
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className={`nav-item ${activeLink === '/' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/" exact>
              <i className="fas fa-tachometer-alt"></i>Home
            </NavLink>
          </li>
          <li className={`nav-item ${activeLink === '/about' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/about" exact>
              <i className="fas fa-address-book"></i>About
            </NavLink>
          </li>

          <li className={`nav-item ${activeLink === '/services' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/services" exact>
              <i className="fas fa-clone"></i>Services
            </NavLink>
          </li>
          <li className={`nav-item ${activeLink === '/login' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/login" exact>
              <i className="fas fa-chart-bar"></i>Login
            </NavLink>
          </li>
          <li className={`nav-item ${activeLink === '/contact' ? 'active' : ''}`}>
            <NavLink className="nav-link" to="/contact" exact>
              <i className="fas fa-copy"></i>Contact Us
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
      <Outlet/>
      </>
  );
};

export default Navbar;
