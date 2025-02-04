import React from "react";
import './Main.css';

function Leftbar({ data }) {

    const destacks = data.destacks;

    return (
        <main>
            <div className="destacks_header">
                <button id="btn1"><h2>All</h2></button>
                <button><h2>Music</h2></button>
                <button><h2>Podcasts</h2></button>
            </div>
            <div className="destacks_model"></div>
            <div className="main_content">
                <div className="destacks_container">
                    <div className="destacks_content">
                        {/* ############### Render Recently played ####################*/}
                        {destacks?.length > 0 && destacks.map((destacks) => (
                            <button className="card" key={destacks.id}>
                                <img src={destacks.imgUrl} alt={destacks.name} />
                                <h4>{destacks.name}</h4>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="Recently_played">
                    <div className="albuns_list_top">
                        <h1>Recently played</h1>
                        <button><h2>Show all</h2></button>
                    </div>
                    <div className="Recently_played_list_cards">
                        {/* ############### Render Recently played ####################*/}
                        {destacks?.length > 0 && destacks.map((destacks) => (
                            <button className="card" key={destacks.id}>
                                <img src={destacks.imgUrl} alt={destacks.name} />
                                <h4>{destacks.name}</h4>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="albuns_list made_for_carlos_juatan">
                    <div className="albuns_list_top">
                        <h1>Made For carlos juatan</h1>
                        <button><h2>Show all</h2></button>
                    </div>
                    <div className="albuns_list_cards">
                        {/* ############### Render Made For carlos juatan ####################*/}
                        {destacks?.length > 0 && destacks.map((destacks) => (
                            <button className="card" key={destacks.id}>
                                <img src={destacks.imgUrl} alt={destacks.name} />
                                <h4>{destacks.name}</h4>
                            </button>
                        ))}
                    </div>
                </div>
                <div className="albuns_list your_favorite_artists">
                    <div className="albuns_list_top">
                        <h1>Your favorite artists</h1>
                        <button><h2>Show all</h2></button>
                    </div>
                    <div className="albuns_list_cards">
                        {/* ############### Render Your favorite artists ####################*/}
                        {destacks?.length > 0 && destacks.map((destacks) => (
                            <button className="card" key={destacks.id}>
                                <img src={destacks.imgUrl} alt={destacks.name} />
                                <h4>{destacks.name}</h4>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </main>  
    );
}

export default Leftbar;