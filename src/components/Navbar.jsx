import React from 'react'
import Product from './Product'
import Template from './Template'
import "./Navbar.scss"

const Navbar = () => {
    return (
        <nav className='navbar1'>
            <div className='navbar1__logo'>
                <img src="https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" alt="" />
            </div>
            <div className='navbar1__options'>
                <ul className='flex'>
                    <Product />
                    <Template />
                    <li><a href='#'>Pricing</a></li>
                    <li><a href='#'>Reviews</a></li>
                </ul>
                <div className='navbar1__auth-buttons'>
                    <button>Log In</button>
                    <button>Start Free</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar