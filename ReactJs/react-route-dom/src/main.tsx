import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import './styles/global.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Menu } from './components/Menu';
import { Posts } from './components/Post';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<Posts />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
