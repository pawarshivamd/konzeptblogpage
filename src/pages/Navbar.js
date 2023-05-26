import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logoimgwhite from '../img/logo/tranferent_konzept_white.svg';
import logoimg from '../img/logo/tranferent_konzept.svg';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logoimgwhite);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 20) {
        setShow(true);
        setLogoSrc(logoimg);
      } else {
        setShow(false);
        setLogoSrc(logoimgwhite);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${show ? '' : 'header-transparent'}  header-full`}>
        <nav className={`navbar navbar-expand-lg sticky-navbar ${show ? 'is-sticky' : ''}  `}>
          <div className="container">
            <a className="navbar-brand" href="/">
              <img loading="lazy" src={logoSrc} height="100" className="logo-light" alt="logo" />
            </a>
            <button className="navbar-toggler"  type="button">
              <span className="menu-lines"><span></span></span>
            </button>

            <div className="collapse navbar-collapse" id="mainNavigation">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav__item has-dropdown">
                                <a href='/' className="dropdown-toggle nav__item-link ">Home</a>
                            </li>
                            <li className="nav__item has-dropdown">
                                <a href="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link">IT
                                    Solutions</a>
                                <ul className="dropdown-menu wide-dropdown-menu">
                                    <li className="nav__item">
                                        <div className="row mx-0">
                                            <div className="col-sm-6 dropdown-menu-col">
                                                <a href="web-solution.html"
                                                    className="nav__item-link dropdown-menu-title">Web
                                                    Solutions</a>
                                                <ul className="nav flex-column">

                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="web-solution.html#informativeweb">Informative
                                                            Web</a>
                                                    </li>
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="web-solution.html#dynamicweb">Dynamic
                                                            Website</a>
                                                    </li>
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="web-solution.html#ecommerceweb">E-Commerce</a>
                                                    </li>

                                                    <a href="mobile-solution.html"
                                                        className="nav__item-link dropdown-menu-title">Mobile
                                                        Solutions</a>
                                                    <ul className="nav flex-column">

                                                        <li className="nav__item"><a className="nav__item-link"
                                                                href="mobile-solution.html#app">App
                                                                Development</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                                href="mobile-solution.html#hyb">Hybrid
                                                                Development</a>
                                                        </li>
                                                        <li className="nav__item"><a className="nav__item-link"
                                                                href="mobile-solution.html#api">API
                                                                Services</a>
                                                        </li>
                                                    </ul>
                                                    </ul>
                                            </div>

                                            <div className="col-sm-6 dropdown-menu-col">
                                                <a href="design-solutions.html"
                                                    className="nav__item-link dropdown-menu-title">Design
                                                    Solutions</a>
                                                <ul className="nav flex-column">
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="design-solutions.html#html">HTML
                                                            Design</a>
                                                    </li>
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="design-solutions.html#uiux">UI / UX</a>
                                                    </li>
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="design-solutions.html#logobrand">Logo
                                                            And Branding</a>
                                                    </li>

                                                </ul>


                                                <a href='/' className="nav__item-link dropdown-menu-title">Other</a>

                                                <ul className="nav flex-column">
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="digital-marketing.html">Digital
                                                            Marketing</a>
                                                    </li>
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="software-solution.html">Software
                                                            Solutions</a>
                                                    </li>
                                                    <li className="nav__item"><a className="nav__item-link"
                                                            href="important-services.html">Important
                                                            Services</a>
                                                    </li>

                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav__item has-dropdown">
                                <a href="/" data-toggle="dropdown" className="dropdown-toggle nav__item-link">Know us</a>
                                <ul className="dropdown-menu">

                                    <li className="nav__item">
                                        <a href="about-us.html" className="nav__item-link">About Us</a>
                                    </li>

                                    <li className="nav__item">
                                        <a href="konzept-solutions.html" className="nav__item-link">Konzept Solutions</a>
                                    </li>

                                    <li className="nav__item">
                                        <a href="why-us.html" className="nav__item-link">Why Choose Us</a>
                                    </li>

                                    <li className="nav__item">
                                        <a href="life-at-konzept.html" className="nav__item-link">Life at Konzept</a>
                                    </li>

                                    <li className="nav__item">
                                        <a href="career" className="nav__item-link">Careers</a>
                                    </li>

                                </ul>
                            </li>

                            <li className="nav__item has-dropdown">
                                <a href="portfolio.html" className="dropdown-toggle nav__item-link">Portfolio</a>
                            </li>

                            <li className="nav__item">
                                <Link to="/"  className="dropdown-toggle nav__item-link active">Blog</Link>
                            </li>
                            <li className="nav__item">
                                <a href="contact-us.html" className="dropdown-toggle nav__item-link">Contact</a>
                            </li>
                        </ul>
                        <button className="close-mobile-menu d-block d-lg-none"><img src="images/icon/time.svg"
                                alt=""/></button>
                    </div>

                </div>
            </nav>
        </header>
        </>
  )
}

export default Navbar
