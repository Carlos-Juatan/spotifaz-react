import React from "react";
import './Player.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShuffle, faBackwardStep, faPause, faForwardStep, faRepeat, faMicrophoneLines, faBars, faMobile, faVolumeLow, faWindowMaximize, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
    return (
        <div className="Player">
            <div className="music_details">
                <button className="music_img_button">
                    {/* img */}
                    <div className="Placeholder"></div>
                </button>
                <div className="text">
                    <h1>music tilte</h1>
                    <h3>artist name</h3>
                </div>
                <div className="save_music">
                    <button> <span><FontAwesomeIcon icon={faPlus} /></span></button>
                </div>
            </div>
            <div className="player_music">
                <div>
                    <button><FontAwesomeIcon icon={faShuffle} /></button>
                    <button><FontAwesomeIcon icon={faBackwardStep} /></button>
                    <button className="pause"><FontAwesomeIcon icon={faPause} /></button>
                    <button><FontAwesomeIcon icon={faForwardStep} /></button>
                    <button><FontAwesomeIcon icon={faRepeat} /></button>
                </div>
                <div>
                    <h3>00:00</h3>
                    <progress value={20} max={100}></progress>
                    <h3>00:00</h3>
                </div>
            </div>
            <div className="configs">
                <button><FontAwesomeIcon icon={faCirclePlay} /></button>
                <button><FontAwesomeIcon icon={faMicrophoneLines} /></button>
                <button><FontAwesomeIcon icon={faBars} /></button>
                <button><FontAwesomeIcon icon={faMobile} /></button>
                <button><FontAwesomeIcon icon={faVolumeLow} /></button>
                <progress value={50} max={100}></progress>
                <button><FontAwesomeIcon icon={faWindowMaximize} /></button>
                <button><FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} /></button>
            </div>
        </div>  
    );
}

export default Footer;