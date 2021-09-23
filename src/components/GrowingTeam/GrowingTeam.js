import React from "react";
import about from '../../images/about_img.png';
import './GrowingTeam.css';

const GrowingTeams = () => {
    return (
        <div className='growing_container'>
            <div className='image_container'>
                <img className='growing_image' src={about} alt='hiring' />
            </div>
            <div className='growing_text_container'>
                <p className='growing_title'>WHAT WE'RE MADE OF</p>
                <h1 className='growing_tagline'>Our team is <br />growing.</h1>
                <p className='growing_statement'>We are looking for talented individuals who want to
                <br /> join a startup that is actually making a tangible 
                <br />difference. We are currently evergreen on all 
                <br />positions, meaning that while we may not be looking 
                <br />to fill a specific role, we are always interested in 
                <br />meeting passionate, driven, and exceptional people.</p>
            </div>
        </div>
    )
}

export default GrowingTeams;