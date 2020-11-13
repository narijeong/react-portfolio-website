import React from 'react'
import './Resume.css'

function Resume() {
    return (
        <div className='resume' id="resume">
            <h1>Resume</h1>
            <div className="resume-wrapper">
                <div className='resume-section personal-info'>
                    <div className="resume-section-item-center">
                        <img className="picture" src='/images/profile-picture.png' />
                    </div>
                    <p className="resume-section-item-center">Nari Jeong</p>
                    <div className="resume-section-item-center">
                        <div className="resume-email">
                            <i class='far fa-envelope' />
                            <p>narijeong@icloud.com</p>
                        </div>
                    </div>
                    <div className="resume-section-item-center">
                        <div className="resume-social-media-list">
                            <a href="https://www.github.com/narijeong" target="_blank"><i class='fab fa-github' /></a>
                            <a href="https://www.linkedin.com/in/nari-jeong-a9720a91" target="_blank"><i class='fab fa-linkedin' /></a>
                        </div>
                    </div>
                </div>
                <div className='resume-section education'>
                    <h2 className="resume-section-item">Education</h2>
                    <div className="resume-section-item">
                        <h3>BS in Computer Science</h3>
                        <h4>University of Texas at Austin</h4>
                    </div>      
                    <div className="resume-section-item">
                        <h3>BS in Mathematics</h3>
                        <h4>University of Texas at Austin</h4>
                    </div>      
                </div>
                <div className="resume-section work-experience">
                    <h2 className="resume-section-item">Work Experience</h2>
                    <div className="resume-section-item">
                        <h3>General Motors</h3>
                        <h4>Software Developer</h4>
                    </div>      
                    <div className="resume-section-item">
                        <h3>JP Morgan & Chase</h3>
                        <h4>Application Development Intern</h4>
                    </div>   
                    <div className="resume-section-item">
                        <h3>RetailMeNot</h3>
                        <h4>Software Engineer in Test</h4>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export default Resume
