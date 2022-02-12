import React from 'react';
import '../css/Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home-container'>
            <img className='home-image' src='' alt='IMG-prime-banner' />
            
            <div className='home-row'>
                <Product id='00000001' title='title' price={0.99} image='' rating={3} />
                <Product id='00000002' title='title' price={0.99} image='' rating={3} />
            </div>
            <div className='home-row'>
                <Product id='00000003' title='title' price={0.99} image='' rating={3} />
                <Product id='00000004' title='title' price={0.99} image='' rating={3} />
                <Product id='00000005' title='title' price={0.99} image='' rating={3} />
            </div>
            <div className='home-row'>
                <Product id='00000006' title='title' price={0.99} image='' rating={3} />
            </div>
        </div>
    </div>
  )
}

export default Home