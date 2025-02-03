import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css'
import Header from './assets/Header/Header';
import Leftbar from './assets/Left_Bar/Leftbar';
import Main from './assets/Main/Main';
import Rightbar from './assets/Rightbar/Rightbar';
import Footer from './assets/Footer/Footer';

const dataUrl = 'http://localhost:3001/data';

function App() {
  const [data, setDada] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(dataUrl);
        setDada(response.data);
      } catch (error) {
        console.error('Erro ao buscar data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data.playlists[0]);

  return (
    <body>
      <Header/>
      <Leftbar data={data} />
      <Main data={data} />
      <Rightbar data={data} />
      <Footer/>
    </body>
  );
}

export default App;
