import React from 'react'
import '../style/footer.scss'
import postervideo1 from "../images/oil1.mp4"


export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <video src={postervideo1} autoPlay muted loop className="video-footer"></video>
                <div className="footer-text">
                    <h3>Original Design </h3>
                    <p>juanSessions designer - juanSessions designer - juanSessions designer -juanSessions designer -juanSessions designer - juanSessions designer</p>
                </div>
            </div>
        </footer>
    )
}
