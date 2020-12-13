import React from 'react'
import postervideo from "../images/oil.mp4"
import '../style/banner.scss'

function Banner() {
    return (
        <div className="banner">
            <video src={postervideo} autoPlay muted loop></video>
        </div>
    )
}

export default Banner
