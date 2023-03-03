import React from 'react'
import { Link } from 'react-router-dom'
import './header.css';

function Header() {
  return (
    <div className='header'>
      <h3>My Hooks Workspace</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header