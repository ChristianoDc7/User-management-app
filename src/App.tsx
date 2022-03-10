import React, { useState } from 'react';
import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './component/navbar/navbar';
import Home from './component/home/home';
import About from './component/about/about';
import Count from './component/count/count';
import Posts from './component/posts/posts';
import Users from './component/users/users';

function App() {
 

  return (
    <div className="App">
       <Navbar/>
       <div className='routes'>
          <Routes >
            <Route path='/' element={<Home />}></Route>
            <Route path='count' element={<Count />}></Route>
            <Route path='posts' element={<Posts />}></Route>
            <Route path='users' element={<Users />}></Route>
            <Route path='about' element={<About />}></Route>
          </Routes>
        </div>
    </div>
  );
}

export default App;
