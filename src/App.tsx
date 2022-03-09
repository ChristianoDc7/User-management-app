import React, { useState } from 'react';
import './App.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css'
import { Routes , Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import About from './component/about/about';
import Count from './component/count/count';

function App() {
 

  return (
    <div className="App">
       <Navbar/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='count' element={<Count />}></Route>
          <Route path='about' element={<About />}></Route>
        </Routes>
    </div>
  );
}

export default App;
