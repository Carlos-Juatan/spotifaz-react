import React, { useState, useEffect } from "react";
import './leftbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faPlus, faArrowRight, faMagnifyingGlass, faListUl } from '@fortawesome/free-solid-svg-icons';

function Leftbar({ data }) {
    const playlists = data.playlists;
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredPlaylists, setFilteredPlaylists] = useState(playlists);

    useEffect(() => {
        // Filtra as playlists quando o termo de pesquisa muda
        const filtered = playlists?.filter(playlist => {
            const lowerCaseSearchTerm = searchTerm.toLowerCase();
            const lowerCasePlaylistName = playlist.name.toLowerCase();
            const lowerCasePlaylistDescription = playlist.description.toLowerCase();

            return (
                lowerCasePlaylistName.includes(lowerCaseSearchTerm) ||
                lowerCasePlaylistDescription.includes(lowerCaseSearchTerm)
            );
        });
        setFilteredPlaylists(filtered);
    }, [searchTerm, playlists]); // Dependências: searchTerm e playlists


    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

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
                        <input type="text" placeholder="Search in Your Library" 
                    value={searchTerm} // Valor do input controlado pelo state
                    onChange={handleSearchChange} // Lida com as mudanças no input
                    />
                    </button>
                    <button id="btn2">
                        <h3>Recents</h3>
                        <FontAwesomeIcon icon={faListUl} />
                    </button>
                </div>

                <div className="Cards_container">
                    {/* ############### Render Playlists ####################*/}
                    {filteredPlaylists?.length > 0 ? ( // Use filteredPlaylists aqui
                        filteredPlaylists.map((playlist) => (
                            <div className="card" key={playlist.id}>
                                <img src={playlist.imgUrl} alt={playlist.name} />
                                <div>
                                    <h1>{playlist.name}</h1>
                                    <h3>{playlist.description}</h3>
                                </div>
                            </div>
                        ))
                    ) : (
                      <p>{playlists?.length === 0 ? "No playlists available." : "No playlists match your search."}</p>
                    )}
                </div>
            </div>
        </div>    
    );
}

export default Leftbar;