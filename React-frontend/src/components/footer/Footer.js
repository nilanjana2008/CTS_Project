import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="panel1 panel-default">
            <footer className="footer1" >
                <div className="container1">
                    <div className="row1">
                        <div className="footer1-col">
                            <h4>Site</h4>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Pricing</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div className="footer1-col">
                            <h4>Get Help</h4>
                            <ul>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Returns</a></li>
                                <li><a href="/myorders">Orders</a></li>
                                <li><a href="#">Payment Options</a></li>
                            </ul>
                        </div>
                        <div className="footer1-col">
                            <h4>Address</h4>
                            <ul>
                                <li><a href="#">Saltlake, Sector-V, Ultadanga, Kolkata-700001 </a></li>
                            </ul>
                        </div>
                        <div className="footer1-col">
                            <h4>follow us</h4>
                            <div className="social-links">
                                <a href="/"> <FaFacebook className='icon' /></a>
                                <a href="/"><FaInstagram className='icon' /></a>
                                <a href="/"><FaTwitter className='icon' /></a>
                                <a href="/"><FaPinterest className='icon' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer >
        </div >
    )
}

export default Footer
