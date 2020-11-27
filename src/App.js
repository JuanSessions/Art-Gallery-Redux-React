import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './components/products/Products'
import Header from './components/Header'
import Home from "./components/Home"
import './style/app.scss'


export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
