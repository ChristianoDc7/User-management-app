import React, { useState } from 'react';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import About from './component/about/about';
import Count from './component/count/count';
import Users from './component/users/users';
import OgtTable from './component/ogt/ogt-table';

function App() {
 

  return (
    <div className="App">
       <Navbar/>
       <div className='routes'>
          <Routes >
            <Route path='/' element={<Home />}></Route>
            <Route path='count' element={<Count />}></Route>
            <Route path='ogt' element={<OgtTable/>}></Route>
            <Route path='users' element={<Users />}></Route>
            <Route path='about' element={<About />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
