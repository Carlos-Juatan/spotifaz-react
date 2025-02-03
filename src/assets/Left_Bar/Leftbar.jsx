import React from "react";
import './leftbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faArrowRight, faMagnifyingGlass, faListUl } from '@fortawesome/free-solid-svg-icons';

function Leftbar({ data }) {

    const playlists = data.playlists;
  
    return (
        <div class="leftbar">
            <div>
                <div>
                    <button>
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
                <div>
                    <h3>Playlists</h3>
                    <h3>Artists</h3>
                    <h3>Albuns</h3>
                </div>
            </div>
            <div>
                <button>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                    <input type="text" />
                </button>
                <button>
                    <h3>Recents</h3>
                    <FontAwesomeIcon icon={faListUl} />
                </button>
            </div>

            <div className="Cards_container">
                {/* Render Playlists */}
                {playlists.map((playlist) => (
                    <div className="card">
                        <button>
                            <img src={playlist.imgUrl} alt={playlist.name} />
                            <div>
                                <p>{playlist.description}</p>
                                <h4>{playlist.name}</h4>
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        </div>    
    );
}

export default Leftbar;