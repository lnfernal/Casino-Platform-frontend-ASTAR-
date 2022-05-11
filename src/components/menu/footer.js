import React from "react";
import { Link } from "@reach/router";
import { FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaPinterestP, FaYoutube, FaInstagram } from "react-icons/fa";

const footer = () => (
    <footer className="footer-light">
        <div className="container">
            <div className="row allcenter">
                <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="widget">
                        <FaPhoneAlt className="icon" />
                        <div className="s2">
                            <div>8 800 1245 235</div>
                            <div>email@yoursite.com</div>
                        </div>

                    </div>
                </div>
                <div className="col-md-2 col-sm-6 col-xs-12">
                    <div className="widget">
                        <img src="./assets/logo.png" alt="" />
                    </div>
                </div>
                <div className="col-md-5 col-sm-12 col-xs-12">
                    <div className="widget">
                        <FaMapMarkerAlt className="icon" />
                        <div className="s2">
                            <div>27 Divsion st.Newyork, My United States</div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-md-1 col-sm-12 col-xs-12">
                    <div className="widget">
                        <h5>Newsletter</h5>
                        <p>
                            Signup for our newsletter to get the latest news in
                            your inbox.
                        </p>
                        <br />
                        <div className="newLetterGroup">
                            <input type="text" className="newletterinput" />
                            <button className="newlettersubmit">Submit</button>
                        </div>
                        <br />
                        <div className="spacer-10"></div>
                        <br />
                        <br />
                        <h5>Follow Us</h5>
                        <div className="footerList">
                            <i className="social_facebook"></i>
                            <i className="social_twitter"></i>
                            <i className="social_pinterest"></i>
                            <i className="social_linkedin"></i>
                            <i className="social_instagram"></i>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="border"></div>
            <div className="row allcenter">
                <div className="col-md-5 col-sm-12 col-xs-12 left">
                    <div className="f-title">About Us</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipiscing edit,sed do incididunt dolore magna aliqua.</div>
                </div>
                <div className="col-md-3 col-sm-12 col-xs-12">
                    <div className="social-icons">
                        <Link to="#">
                            <FaFacebookF className="blue" />
                        </Link>
                        <Link to="#"><FaInstagram className="pink" /></Link>
                        <Link to="#"><FaTwitter className="green" /></Link>
                        <Link to="#"><FaPinterestP className="red" /></Link>
                        <Link to="#"><FaYoutube className="red" /></Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 col-xs-12">
                    <div className="f-title right">Quick Links</div>
                    <div className="widget justifyright">
                        <Link to="#">Contact Us</Link>
                        <div className="horizontal"></div>
                        <Link to="#">How we work</Link>
                    </div>
                </div>
            </div>
            <div className="border"></div>
            <div className="f-bottom">Copyright @ 2010-2021 deamchain S.L. All rights reserved.</div>
        </div>
    </footer>
);
export default footer;
