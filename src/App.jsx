import React from 'react';
import './App.css'
import UseFetchData from './componentes/Fetch/Fetch';
import Header from './componentes/Header/Header';
import Leftbar from './componentes/Left_Bar/Leftbar';
import Main from './componentes/Main/Main';
import Rightbar from './componentes/Rightbar/Rightbar';
import Footer from './componentes/Footer/Footer';

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
