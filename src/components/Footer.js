import React from 'react'
import '../style/footer.scss'
import postervideo1 from "../images/oil1.mp4"


export default function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <video src={postervideo1} autoPlay muted loop className="video-footer"></video>
                <div className="footer-text">
                    <h3>Footer info </h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nisi aperiam nam et cupiditate perspiciatis voluptates quidem inventore vel quas aut, sunt at.</p>
                </div>
            </div>
        </footer>
    )
}
