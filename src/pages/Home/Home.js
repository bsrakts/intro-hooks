import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

export const Home = () => {
  return (
    <div className='home container-fluid w-full flex justify-center'>
      <ul>
        <li>
          <Link to="/detail">useState</Link>
        </li>
        <li>
          <Link to="/about">useEffect</Link>
        </li>
        <li>
          <Link to="/about">useEffect</Link>
        </li>
      </ul>
    </div>
  )
}
