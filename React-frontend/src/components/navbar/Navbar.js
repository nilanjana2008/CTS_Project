import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'

import { Link } from 'react-scroll'
import { Link as Linki } from 'react-router-dom';
import './NavbarStyles.css'

function Navbar({Logout,user}) {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <div name='home' className={nav ? 'navbar navbar-bg' : 'navbar'}>
            <div className={nav ? 'logo dark' : 'logo'}>
                <h2>GOTRAVEL.</h2>
            </div>
            <ul className="nav-menu">
                <Linki to='/' ><li>Home</li></Linki>
                <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                <Linki to='/add-employee' smooth={true} duration={500} ><li>Book</li></Linki>
                <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
            </ul>
            <div className="nav-icons">
                
                <Linki to="/login"><BsPerson className='icon' /></Linki>
                {user.name?<button >{user.name}</button>:<></>}
                <button onClick={Logout}>Logout</button>
            </div>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<HiOutlineMenuAlt4 className='icon' />) : (<AiOutlineClose style={{ color: '#000' }} className='icon' />)}

            </div>

            <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
                <ul className="mobile-nav">
                    <Link to='home' smooth={true} duration={500} ><li>Home</li></Link>
                    <Link to='destinations' smooth={true} duration={500} ><li>Destinations</li></Link>
                    <Link to='carousel' smooth={true} duration={500} ><li>Travel</li></Link>
                    <Link to='search' smooth={true} duration={500} ><li>Book</li></Link>
                    <Link to='views' smooth={true} duration={500} ><li>Views</li></Link>
                </ul>
                <div className="mobile-menu-bottom">
                    <div className="menu-icons">
                        <button>Search</button>
                        <button>Account</button>
                    </div>
                    <div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaTwitter className='icon' />
                        <FaPinterest className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar
