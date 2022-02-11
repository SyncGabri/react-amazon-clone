import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image' src='' alt='IMG-prime-banner' />
            
            <div className='home-row'>
                <Product idNum='00000001' title='title' price={0.99} image='' rating={3} />
                <Product idNum='000001' title='title' price={0.99} image='' rating={3} />
            </div>
            <div className='home-row'>
                <Product idNum='00000001' title='title' price={0.99} image='' rating={3} />
                <Product idNum='00000001' title='title' price={0.99} image='' rating={3} />
                <Product idNum='00000001' title='title' price={0.99} image='' rating={3} />
            </div>
            <div className='home-row'>
                <Product idNum='00000001' title='title' price={0.99} image='' rating={3} />
            </div>
        </div>
    </div>
  )
}

export default Home