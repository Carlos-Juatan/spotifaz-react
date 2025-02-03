import React from 'react';
import './App.css'
import UseFetchData from './assets/Fetch/Fetch';
import Header from './assets/Header/Header';
import Leftbar from './assets/Left_Bar/Leftbar';
import Main from './assets/Main/Main';
import Rightbar from './assets/Rightbar/Rightbar';
import Footer from './assets/Footer/Footer';

function App() {
  
  const data = UseFetchData();

  return (
    <div>
    <Header/>
    <Leftbar data={data} />
    <Main data={data} />
    <Rightbar data={data} />
    <Footer/>
    </div>
  );
}

export default App;
