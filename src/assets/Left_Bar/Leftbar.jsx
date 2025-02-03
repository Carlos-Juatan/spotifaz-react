import React from "react";
import './leftbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faArrowRight, faMagnifyingGlass, faListUl } from '@fortawesome/free-solid-svg-icons';

function Leftbar({ data }) {

    const playlists = data.playlists;
  
    return (
        <div className="leftbar">
            <div className="leftbar_menu">
                <div className="leftbar_header">
                    <div>
                        <button id="leftbar_header_Library_btn">
                            <FontAwesomeIcon icon={faBars} />
                            <h2>Your Library</h2>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </div>
                </div>
                <div className="leftbar_Options">
                    <div>
                        <button><h3>Playlists</h3></button>
                        <button><h3>Artists</h3></button>
                        <button><h3>Albuns</h3></button>
                    </div>
                </div>
            </div>
            <div className="leftbar_playlists">
                <div className="leftbar_research">
                    <button id="btn_research_library">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="btn1"/>
                        <input type="text" placeholder="Search in Your Library" />
                    </button>
                    <button id="btn2">
                        <h3>Recents</h3>
                        <FontAwesomeIcon icon={faListUl} />
                    </button>
                </div>

                <div className="Cards_container">
                    {/* ############### Render Playlists ####################*/}
                    {playlists?.length > 0 && playlists.map((playlist) => (
                        <div className="card" key={playlist.id}> 
                            <img src={playlist.imgUrl} alt={playlist.name} />
                            <div>
                                <h1>{playlist.name}</h1> 
                                <h3>{playlist.description}</h3> 
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>    
    );
}

export default Leftbar;