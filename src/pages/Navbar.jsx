import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', color: 'white' }}>
          Logo
        </div>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '1rem', margin: 0 }}>
          <li> <NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Content">Content</NavLink></li>
          <li><NavLink to="/Cards">Cards</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
