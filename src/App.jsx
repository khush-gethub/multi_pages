import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cards from './pages/Cards'
import Content from './pages/Content'
import Home from './pages/Home'



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/content" element={<Content />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
