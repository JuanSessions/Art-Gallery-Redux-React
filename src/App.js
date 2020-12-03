import React from 'react'
import { HashRouter } from 'react-router-dom'
import Routes from './Routes'
import Footer from './components/Footer'
import postervideo1 from "./images/oil1.mp4"
import './style/app.scss'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

export default function App() {
    return (
        <HashRouter>
            <div className="app">
                <Navbar />
                <div className="video-overlay">
                    <h1 className="rainbow-text">Art Gallery</h1>
                    <h2 className="rainbow-text">Audiovisual</h2>
                </div>
                <video className="video-first" src={postervideo1} autoPlay muted loop></video> 
                <Banner />
                <Routes />
                <Footer />
            </div>
        </HashRouter>
    )
}
