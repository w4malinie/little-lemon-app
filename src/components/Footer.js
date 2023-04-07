import React from 'react'
import logo from '../assets/Logo.svg';

function Footer() {
  return (
    <footer>
        <img src={logo} alt='Little Lemon logo' />
        <div>
            <div>
                <h6>Contact</h6>
                <p>
                    +1 202-918-2132
                    <br/>little@lemon.com
                    <br/><br/>5819 N ROCKWELL ST 
                    <br/>CHICAGO IL 60659-4985 
                </p>
            </div>
            <div>
                <h6>Links</h6>
               <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservations'>    Reservations</a></li>
                    <li><a href='/order-online'>Order online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>   
            </div>
            <div>
                <h6>Follow us</h6>
               <ul>
                    <li><a href='https://www.facebook.com'>Facebook</a></li>
                    <li><a href='https://www.instagram.com'>Instagram</a></li>
                    <li><a href='https://www.linkedin.com'>Linkedin</a></li>
                    
                </ul>   
            </div>
        </div>
     
    </footer>
  )
}

export default Footer
