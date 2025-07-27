import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'


const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()  //navigate after Axios success
  const [error, setError] = useState('')
  const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  const handleLogin = async (e) => {
    e.preventDefault()              // this is for gape not refresh

    const userData = { username, password }
    console.log('userData==>', userData)

    //   try{
    //     const response =await  axios.post('http://127.0.0.1:8000/api/token/',userData,{
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //   })
    //     console.log('User registered:', response.data);
    //     console.log('response:', response); 
    //     console.log("hello")
    //     localStorage.setItem('access', response.data.access);
     // localStorage.setItem('refresh', response.data.refresh);

      // ✅ Navigate to dashboard or home
     // navigate('/dashboard'); // or '/home'  
    //   }catch(error){
    //     console.error('Invalid Credentials')
    //   }
    // }

      axios.post('http://127.0.0.1:8000/api/token/', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
        
      })
        
        .then((response) => {
          console.log('User logged in:', response.data);
          localStorage.setItem('AccessToken',response.data.access)
          localStorage.setItem('RefreshToken' ,response.data.refresh)
          console.log('Login Successful')
          setIsLoggedIn(true)
          navigate('/') // or '/home' //navigate after Axios success
        })
        .catch((error) => {
          console.error('Login failed:', error.response?.data || error.message);
          setError('Login failed')
        })
      }
      const handleChange = (e) => {
        setUsername(e.target.value)
      }

    return (
      <div className="container mt-5">
        <h2 className="mb-4 text-light text-center">Register</h2>
        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label text-light">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={username}
              onChange={handleChange}
              required
            />

            {/* <small>{errors.username && <div className='text-danger'></div>}    </small> */}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              // onChange={handleChange}
              onChange={(e) => {
                setPassword(e.target.value)
              }}

              required
              minLength="8"
            />
          </div>

              {error && <div className='text-danger'>{error}</div>}

          {/* Submit Button */}
          <button type="submit" className="btn btn-primary">Register</button>
        </form>
      </div>
    );
  }

  export default Login