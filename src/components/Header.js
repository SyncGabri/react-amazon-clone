import React from 'react';
import '../css/Header.css';
import SeachIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from 'react-router-dom';
import { useStateValue } from "../StateProvider";
import { auth } from '../firebase';
import logo from "../assets/amazon_logo_white.png";

export default function Header() {

    const [{basket, user}, dispatch] = useStateValue();

    const handleAuth = () => {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            
            <Link to='/'>
                <img src={logo} className='header-logo' alt="img-header-logo" />
            </Link>
            
            <div className='header-search'>
                <input className='header-search-input' type="text" />
                <SeachIcon className='header-search-icon' />
            </div>
            
            <div className='header-nav'>
                <Link to={!user && '/login'}>
                    <div className='header-nav-option' onClick={handleAuth}>
                        <span className='header-nav-option-line1'> Hello {!user ? 'Guest' : user.email} </span>
                        <span className='header-nav-option-line2'>
                            {user ? 'Sign Out' : 'Sign In'}     
                        </span>
                    </div>
                </Link>
                <div className='header-nav-option'>
                    <span className='header-nav-option-line1'> Returns </span>
                    <span className='header-nav-option-line2'> Orders </span>
                </div>
                
                <div className='header-nav-option'>
                    <span className='header-nav-option-line1'> Your </span>
                    <span className='header-nav-option-line2'> Prime </span>
                </div>

                <Link to='/checkout'>
                    <div className='header-nav-basket'>
                        <ShoppingBasketIcon className='header-nav-basket-icon' />
                        <span className='header-nav-option-line2 header-nav-basket-counter'> {basket?.length} </span>
                    </div>
                </Link>
                
            </div>
             
        </div>
    )
}
