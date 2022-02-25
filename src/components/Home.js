import React from 'react';
import '../css/Home.css';
import Product from './Product';
import banner from '../assets/amazon_banner.png';

import prod01 from '../assets/products/echo_dot.png';
import prod02 from '../assets/products/fire_HD.png';
import prod03 from '../assets/products/kda_mousemat.png';
import prod04 from '../assets/products/mech_keyboard_set.png';
import prod05 from '../assets/products/astro_headset.png';
import prod06 from '../assets/products/ultrawide_monitor.png';


function Home() {
    return (
        <div className='home'>
            <div className='home-container'>
                <img className='home-image' src={banner} alt='IMG-banner' />
                
                <div className='home-row'>
                    <Product 
                        id='00000001' title='Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric' 
                        price={24.99} image={prod01} rating={4} />
                    <Product 
                        id='00000002' title='Fire HD 8 Tablet, 8" HD display, 32 GB, Black - with Ads, designed for portable entertainment' 
                        price={69.99} image={prod02} rating={4} />
                </div>
                <div className='home-row'>
                    <Product 
                        id='00000003' title='Logitech G840 K/DA XL Cloth Gaming Mouse Pad, 3 mm Thin Pad, Stable Rubber Base, Official League of Legends Gaming Gear - Multicolor' 
                        price={33.84} image={prod03} rating={5} />
                    <Product 
                        id='00000004' title='Gaming Keyboard {UK Layout}, HAVIT Rainbow LED Backlit Wired Keyboard and Right-Handed Mouse Combo Set, Black' 
                        price={29.99} image={prod04} rating={5} />
                    <Product 
                        id='00000005' title='ASTRO Gaming A50 Wireless Gaming Headset + Charging Base Station, Game/Voice Balance Control, 2.4 GHz Wireless, 15 m Range, for PS5, PS4, PC, Mac - Black/Silver' 
                        price={259.99} image={prod05} rating={5} />
                </div>
                <div className='home-row'>
                    <Product 
                        id='00000006' title='Samsung Odyssey G5 LC34G55TWWRXXU 34" 1000R Curved Gaming Monitor - 165Hz, 1ms, 1440p WQHD, Freesync Premium, HDR10, HDMI, Displayport' 
                        price={434.49} image={prod06} rating={4} />
                </div>
            </div>
        </div>
    )
}

export default Home