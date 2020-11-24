import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './style/app.css'

export default function App() {
    return (
        <HashRouter>
            <div className="app">
                <Navbar />
                <Routes />
                <Footer />
            </div>
        </HashRouter>
    )
}
