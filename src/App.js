import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Footer from './components/Footer'
import Header from './components/Header'
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
