import React from 'react'
import Navbar from './Navbar'


const Content = () => {
  return (
    
<>
<Navbar/>
<div style={{
      backgroundColor: '#f0f0f0',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ color: '#333', marginBottom: '10px' }}>Welcome to Our Content</h1>
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        This is where you can find all the latest information and updates.
        Feel free to explore and learn more about our offerings.
      </p>
      <button style={{
        backgroundColor: '#007bff',
        color: 'white',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        marginTop: '15px'
      }}>
        Learn More
      </button>
    </div>
</>
  )
}

export default Content
