import React from "react";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faMagnifyingGlass, faBars, faDownload } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';

const Header = ({ searchTerm, onSearchChange }) => {
    return (
        <header>
            <nav>
                <div className="header_logo">
                    <button>
                        <FontAwesomeIcon icon={faSpotify} />
                    </button>
                </div>

                <div className="header_research_container">
                    <button className="header_research_home" id="header_research_home">
                        <span>
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                    </button>
                    <div className="header_research_input">
                        <div className="header_research_input_fyingGlass">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                        <input type="text" placeholder="What do you want to play?" 
                            value={searchTerm}  // Valor controlado pela prop
                            onChange={onSearchChange} // Função para atualizar o estado no pai
                        />
                        <div className="header_research_input_divider"></div>
                        <button className="header_research_input_menu">
                            <span>
                                <FontAwesomeIcon icon={faBars} />
                            </span>
                        </button>
                    </div>
                </div>

                <div className="header_loggin">
                    <button className="header_loggin_premium">
                        <h5>Explore Premium</h5>
                    </button>
                    <button className="header_loggin_download">
                        <FontAwesomeIcon icon={faDownload} />
                        <h5>Install App</h5>
                    </button>
                    <button className="header_loggin_bell"><FontAwesomeIcon icon={faBell} /></button>
                    <button className="header_loggin_account"><h3>C</h3></button>
                </div>
            </nav>
        </header>
    );
}

export default Header;