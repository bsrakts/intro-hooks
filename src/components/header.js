import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
      <Link to="/denemeiki">
        useState
      </Link>
      <Link to="/deneme">
        useEffect
      </Link>
    </div>
  )
}

export default Header