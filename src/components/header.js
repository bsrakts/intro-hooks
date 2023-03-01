import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/detail">Topics</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header