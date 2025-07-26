// import React from 'react'
// import Button from './Button'
// import { Outlet, Link } from "react-router-dom";

// const Header =(props)=> {
//   return (
//     <>
//       <nav className='navbar container pt-3 pd-3 align-items-start '>
//         {/* <a className='navbar-brand text-align' href=''>Stock Prediction portal  </a> */}
//         <Link className='navbar-brand text-align' to={props.url}>Stock Prediction portal  </Link>
//         <div>
//           {/* <a className="btn btn-outline-info" href=''>Login</a>
//           <a className='btn btn-info' href=''>Register</a> */}

//           <Button text='Login' class='btn-outline-info' url='/login'/>
//           <Button text='Register' class='btn btn-info' url='/register'/>
//         </div>
//       </nav>
//     </>
//   )
// }

// export default Header


import { Link } from 'react-router-dom';
import Button from './Button'; // Update the path as per your folder structure

const Header = (props) => {
  return (
    <nav className='navbar container p-3 align-items-start'>
      <Link className='navbar-brand' to='/'>
        Stock Prediction Portal
      </Link>
      <div>
        <Button text='Login' class='btn-outline-info' url='/login' />
        <Button text='Register' class='btn-info' url='/register' />
      </div>
    </nav>
  );
};

export default Header;
