import React from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Page2 from './pages/page2.jsx'
import Page3 from './pages/page3.jsx'
import Page4 from './pages/page4.jsx'




const route = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path: "/apropos",
        element: <Page2 />
    },
    {
        path: "/portfolio",
        element: <Page3 />
    },
    {
        path: "/contact",
        element: <Page4 />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router= {route} />)
