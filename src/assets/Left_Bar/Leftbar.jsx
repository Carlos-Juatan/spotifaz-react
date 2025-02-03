import React from "react";
import './leftbar.css';

function Leftbar({ data }) {
    return (
        <div class="leftbar">
            <h2>{data.playlists[0].name}</h2>
        </div>    
    );
}

export default Leftbar;