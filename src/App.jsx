import React, { useState } from 'react';
import './App.css'
import UseFetchData from './componentes/Fetch/Fetch';
import Header from './componentes/Header/Header';
import Leftbar from './componentes/Left_Bar/Leftbar';
import Main from './componentes/Main/Main';
import Rightbar from './componentes/Rightbar/Rightbar';
import Footer from './componentes/Footer/Footer';
import Player from './componentes/Player/Player';

function App() {
  
  const data = UseFetchData();

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
    <Header searchTerm={searchTerm} onSearchChange={handleSearchChange} />
    <Leftbar data={data} />
    <Main  searchTerm={searchTerm} data={data} />
    <Rightbar data={data} />
    <Footer/>
    <Player />
    </div>
  );
}

export default App;
