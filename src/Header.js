import React from 'react';
import './Header.css';
import SeachIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

export default function Header() {
  return (
    <div className='header'>
        <img src="" className='header-logo' alt="img-header-logo" />
        <div className='header-search'>
            <input className='header-search-input' type="text" />
            <SeachIcon className='header-search-icon' />
        </div>
        <div className='header-nav'>
            <div className='header-nav-option'>
                <span className='header-nav-option-line1'> Hello User </span>
                <span className='header-nav-option-line2'> Sign In </span>
            </div>
            <div className='header-nav-option'>
                <span className='header-nav-option-line1'> Returns </span>
                <span className='header-nav-option-line2'> Orders </span>
            </div>
            <div className='header-nav-option'>
                <span className='header-nav-option-line1'> Your </span>
                <span className='header-nav-option-line2'> Prime </span>
            </div>

            <div className='header-nav-basket'>
                <ShoppingBasketIcon className='header-nav-basket-icon' />
                <span className='header-nav-option-line2 header-nav-basket-counter'> 0 </span>
            </div>
        </div> 
    </div>
  )
}
