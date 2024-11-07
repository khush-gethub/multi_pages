import React from 'react'
import Navbar from './Navbar'


const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="hero-section" style={{ backgroundColor: '#f0f0f0', padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to Our Website</h1>
          <p style={{ fontSize: '18px', marginBottom: '30px' }}>Discover amazing features and services</p>
          <button style={{ 
            padding: '10px 20px', 
            fontSize: '16px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}

export default Home
