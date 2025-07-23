import React from 'react'
import Button from './Button'

const Header =()=> {
  return (
    <>
      <nav className='navbar container pt-3 pd-3 align-items-start '>
        <a className='navbar-brand text-align' href=''>Stock Prediction portal  </a>
        <div>
          {/* <a className="btn btn-outline-info" href=''>Login</a>
          <a className='btn btn-info' href=''>Register</a> */}

          <Button text='Login' class='btn-outline-info'/>
          <Button text='Register' class='btn btn-info' />
        </div>
      </nav>
    </>
  )
}

export default Header