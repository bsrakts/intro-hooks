import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css';

export const Home = () => {
  return (
    <div className='home container-fluid w-full flex justify-center'>
      <ul>
        <li>
          <Link to="/hookstate">useState</Link>
        </li>
        <li>
          <Link to="/hookeffect">useEffect</Link>
        </li>
        <li>
          <Link to="/hookmemo">useMemo</Link>
        </li>
        <li>
          <Link to="/hookref">useRef</Link>
        </li>
      </ul>
    </div>
  )
}
