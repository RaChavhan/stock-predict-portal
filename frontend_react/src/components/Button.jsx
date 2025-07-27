import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
     {/* <a  className={`btn ${props.class}`} href=''>{props.text}</a> */}
     <Link  className={`btn ${props.class}`} to={props.url}>
        {props.text}
     </Link>
    </>
  )
}

export default Button