import React from 'react'
import { faPhone, faEnvelope ,faLinkedInIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import facebook from '../img/icon/facebook.svg'
import linkdin from '../img/icon/linkedin.svg'
import instagram from '../img/icon/instagram.svg'
import twiitter from '../img/icon/twiitter.svg'
import logoimgwhite from '../img/logo/tranferent_konzept_white.svg'
import logoimg from '../img/logo/tranferent_konzept.svg'



const Footer = () => {
    return (
        <>
            <footer className="footer bg-secondary">
                <div className="container">
                    <div className="footer-primary">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-3 footer-widget footer-widget-about">
                                <div className="footer-widget__content">

                                    <div className="contact-info">
                                        <ul className="contact-list list-unstyled">
                                            <a href="index.html"><img width="200px" loading="lazy"
                                                src={logoimgwhite} alt="logo"
                                                className="mb-30" /></a>
                                            <li className="color-gray">Konzept Solutions believes in having higher goal and
                                                achieving it. Our goal
                                                is to be one of the best Information Technology Company.
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 offset-lg-1 footer-widget footer-widget-nav">
                                <h6 className="footer-widget__title">Company</h6>
                                <div className="footer-widget__content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href="about-us.html">About Us</a></li>
                                            <li><a href="blog">News & Blogs</a></li>
                                            <li><a href="contact-us.html">Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
                                <h6 className="footer-widget__title">Solutions</h6>
                                <div className="footer-widget__content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href="web-solution.html">Web Solutions</a></li>
                                            <li><a href="mobile-solution.html">Mobile Solutions</a></li>
                                            <li><a href="digital-marketing.html">Digital Marketing</a></li>
                                            <li><a href="design-solutions.html#uiux">UI / UX</a></li>
                                            <li><a href="software-solution.html">Software Solutions</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
                                <h6 className="footer-widget__title">Resources</h6>
                                <div className="footer-widget__content">
                                    <nav>
                                        <ul className="list-unstyled">
                                            <li><a href="career">Careers</a></li>
                                            <li><a href="why-us.html">Why Choose Us</a></li>
                                            <li><a href="help-and-faq.html">Help & FAQ</a></li>
                                            <li><a href="sitemap.html">Sitemap</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-6 col-md-6 col-lg-2 footer-widget footer-widget-nav">
                                <h6 className="footer-widget__title">Quick Contact</h6>
                                <ul className="contact-list list-unstyled">

                                    <li className="mt-20 mb-20">
                                        <a href="tel:+919925033209" className="phone-number">
                                        <FontAwesomeIcon icon={faPhone} /> <span>+91 99250 33209</span>
                                        </a>
                                        <a href="mailto:contact@konzeptsolutions.com"class="phone-number">
                                        <FontAwesomeIcon icon={faEnvelope} /><span>contact@konzeptsolutions.com</span></a>
                                        {/* <a href="mailto:contact@konzeptsolutions.com"className="phone-number">
                                        <FontAwesomeIcon icon={faEnvelope} /><span>contact@konzeptsolutions.com</span></a> */}
                                    </li>
                                    <li className="color-body mt-20">1122, Shivalik Shilp 2,
                                        Near Keshavbaug Party plot,
                                        Satellite, Ahmedabad
                                        Gujarat, India - 380015</li>
                                </ul>
                                <ul className="social-icons list-unstyled mb-0">
                                    <li><a href="https://www.facebook.com/konzeptsolutions/" target="_blank"><img
                                        className="facdn" src={facebook} alt="" /></a></li>
                                    <li><a href="https://www.linkedin.com/company/konzeptsolutions" target="_blank">
                                    <img className="facdn" src={linkdin} alt="" />
                                    {/* <FontAwesomeIcon icon={faLinkedInIn} /> */}
                                    </a></li>
                                    <li><a href="https://www.instagram.com/konzeptsolutions/" target="_blank"><img
                                        className="facdn" src={instagram} alt="" /></a></li>
                                    <li><a href="https://twitter.com/konzeptsolution" target="_blank"><img className="facdn"
                                        src={twiitter} alt="" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 text-center pb-110">
                        <span className="fz-14">Copyrights &copy; 2023 All Rights Reserved |</span>
                        <a href="index.html"><span style={{color: '#1AB2A9'}}> konzept solutions</span></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
