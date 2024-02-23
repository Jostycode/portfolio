import React, { useState } from 'react'
import Navbar from './navbar/navbar.jsx'
import Page1 from './pages/page1.jsx'



function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <Navbar/>
      <Page1 />
      {/* <Page2 /> */}
      </>
  )
}

export default App
