import React from 'react'
import Button from './Button'
import { Outlet, Link } from "react-router-dom";

function Main_Inner() {
  return (
    <>
      <div className='container'>
        <div className='p-5 text-center bg-light-dark rounded'>
          <h1 className='text-light'>Stock Prediction portal</h1>
          <p className='text-light'> Find top stocks & mutual funds backed by AI-driven research. <br />
            Invest smarter today. Skip the hard work, Use Mojo Score to make better, <br />
            smarter investment decisions today.Top Rated Stocks to Watch in India | <br />
            Mojo Stocks by MarketsMojo </p>

          
          <Button text='Login'  class="btn-outline-info"  url='/login' />

        </div>

      </div>

    </>
  )
}

export default Main_Inner