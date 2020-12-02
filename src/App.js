import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import postervideo1 from "./images/oil1.mp4"
import './style/app.scss'


export default function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <div className="video-overlay">
                    <h1 className="rainbow-text">Art Galery</h1>
                    <h2 className="rainbow-text">Audiovisual</h2>
                </div>
                <video className="video-first" src={postervideo1} autoPlay muted loop></video>
                
                <Navbar />
                <Routes />
                <Footer />
            </div>
        </BrowserRouter>
    )
}
