import './Navbar.css';
import { FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaSpotify,FaItunesNote } from 'react-icons/fa';
import React, { useState } from 'react'
import {Link} from 'react-scroll';




function Navbar() {

    return (
            <nav className="container">
                <div className="header-con">
                <div className="logo">
                    <h1 className="hyukoh">HYUKOH</h1>
                </div>
                  <ul className="left">
                <li className="nav-item">
                   <a href="#">HOME</a>
                </li>
                <li className="nav-item">
                   <Link to="music" smooth={true} duration={2000}>MUSIC</Link>
                </li>
                <li className="nav-item">
                   <Link to="video" smooth={true} duration={2000}>VIDEO</Link>
                </li>
                <li className="nav-item">
                   <Link to="contact" smooth={true} duration={2000}>CONTACT</Link>
                </li>
            </ul>
            
            <ul className="right">
                <li>
                <a href="https://www.facebook.com/HYUKOHofficial"><FaFacebookF /></a>
                </li>
                <li>
                <a href="https://www.instagram.com/hyukohofficial/"><FaInstagram /></a>
                </li>
                <li>
                <a href="https://twitter.com/hyukohh"><FaTwitter /></a>
                </li>
                <li>
                <a href="https://www.youtube.com/channel/UCuvdmRlSWAlwB_rJZgg1cmQ"><FaYoutube /></a>
                </li>
                <li>
                <a href="https://open.spotify.com/artist/57okaLdCtv3nVBSn5otJkp"><FaSpotify /></a>
                </li>
                <li>
                <a href="https://music.apple.com/us/artist/hyukoh/927548906"><FaItunesNote /></a>
                </li>
            </ul>
            </div>
            </nav>
        
    )
}

export default Navbar