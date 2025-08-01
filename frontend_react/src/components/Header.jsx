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

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from './Button'; // Update the path as per your folder structure
import { AuthContext } from '../AuthProvider';

const Header = (props) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    setIsLoggedIn(false)
    console.log('Logged out')
    navigate('/login')
  }

  return (
    <nav className='navbar container p-3 align-items-start'>
      <Link className='navbar-brand' to='/'>
        Stock Prediction Portal
      </Link>
      <div>
        {isLoggedIn ? (
          // <span >Logout</span>
          <>
           <Button text='Dashboard'  class="btn-outline-info"  url='/dashboard' />
           &nbsp;
          <button className='btn btn-danger' onClick={handleLogout} >Logout</button>
          </>
          
        ) : (

          // <span >Login</span>
          <>
            <Button text='Login' class='btn-outline-info' url='/login' />  
            &nbsp;
            <Button text='Register' class='btn-info' url='/register' />
          </>
        )

        }


      </div>
    </nav>
  );
};

export default Header;
