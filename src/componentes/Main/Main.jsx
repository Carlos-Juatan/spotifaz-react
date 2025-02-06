import React, { useState, useEffect } from "react";
import './Main.css';

function Leftbar({ searchTerm, data }) {
    const destacks = data.destacks;
    const Recently_played = data.Recently_played;
    const Made_For_carlos_juatan = data.Made_For_carlos_juatan;
    const Your_favorite_artists = data.Your_favorite_artists;

    const [filteredDestacks, setFilteredDestacks] = useState(destacks);
    const [filteredRecentlyPlayed, setFilteredRecentlyPlayed] = useState(Recently_played);
    const [filteredMadeFor, setFilteredMadeFor] = useState(Made_For_carlos_juatan);
    const [filteredArtists, setFilteredArtists] = useState(Your_favorite_artists);

    useEffect(() => {
        const filterData = (data, setData) => {
            const filtered = data?.filter(item => {
                const lowerCaseSearchTerm = searchTerm.toLowerCase(); // Use o searchTerm da prop
                const lowerCaseItemName = item.name.toLowerCase();
                return lowerCaseItemName.includes(lowerCaseSearchTerm);
            });
            setData(filtered);
        };

        filterData(destacks, setFilteredDestacks);
        filterData(Recently_played, setFilteredRecentlyPlayed);
        filterData(Made_For_carlos_juatan, setFilteredMadeFor);
        filterData(Your_favorite_artists, setFilteredArtists);
    }, [searchTerm, destacks, Recently_played, Made_For_carlos_juatan, Your_favorite_artists]); // searchTerm agora é uma dependência
    
    return (
        <main>
            <div className="destacks_header">
                <button id="btn1"><h2>All</h2></button>
                <button><h2>Music</h2></button>
                <button><h2>Podcasts</h2></button>
            </div>
            {(destacks?.length != filteredDestacks?.length) ? <div /> : <div className="destacks_model"></div> }
            <div className="main_content">
                {destacks?.length != filteredDestacks?.length ? 
                    <div />
                    :            
                    <div className="destacks_container">
                        <div className="destacks_content">
                            {/* ############### Render Recently played ####################*/}
                            {destacks?.map((item) => (
                                <button className="card" key={item.id}>
                                    <img src={item.imgUrl} alt={item.name} />
                                    <h4>{item.name}</h4>
                                </button>
                            ))}
                        </div>
                    </div>
                }
                {(filteredRecentlyPlayed?.length > 0 || filteredMadeFor?.length > 0 || filteredArtists?.length > 0) ?
                    <section>
                        {filteredRecentlyPlayed?.length > 0 ?
                            <div className="player_list" id="Recently_played">
                                <div className="albuns_list_top">
                                    <h1>Recently played</h1>
                                    <button><h2>Show all</h2></button>
                                </div>
                                <div className="Recently_played_list_cards">
                                    {/* ############### Render Recently played ####################*/}
                                    {filteredRecentlyPlayed?.map((item) => (
                                        <button className="card" key={item.id}>
                                            <img src={item.imgUrl} alt={item.name} />
                                            <h4>{item.name}</h4>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            :
                            <div />
                        }
                        {filteredMadeFor?.length > 0 ?
                            <div className="player_list albuns_list" id="made_for_carlos_juatan">
                                <div className="albuns_list_top">
                                    <h1>Made For carlos juatan</h1>
                                    <button><h2>Show all</h2></button>
                                </div>
                                <div className="albuns_list_cards">
                                    {/* ############### Render Made For carlos juatan ####################*/}
                                    {filteredMadeFor?.map((item) => (
                                        <button className="card" key={item.id}>
                                            <img src={item.imgUrl} alt={item.name} />
                                            <h4>{item.name}</h4>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            :
                            <div />
                        }
                        {filteredArtists?.length > 0 ?
                            <div className="player_list albuns_list"id="your_favorite_artists">
                                <div className="albuns_list_top">
                                    <h1>Your favorite artists</h1>
                                    <button><h2>Show all</h2></button>
                                </div>
                                <div className="albuns_list_cards">
                                    {/* ############### Render Your favorite artists ####################*/}
                                    {filteredArtists?.map((item) => (
                                        <button className="card" key={item.id}>
                                            <img src={item.imgUrl} alt={item.name} />
                                            <div>
                                                <h1>{item.name}</h1>
                                                <h4>Artist</h4>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>
                            :
                            <div />
                        }
                    </section>
                    :
                    <div className="research_not_founded">
                        <h1>Research Not Founded.</h1>
                    </div>
                }
            </div>
        </main>  
    );
}

export default Leftbar;