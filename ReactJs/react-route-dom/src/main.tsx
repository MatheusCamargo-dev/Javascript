import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import ReactDOM from 'react-dom/client';
import { Home } from './components/Home';
import { About } from './components/About';
import { Menu } from './components/Menu';
import { Posts } from './components/Posts';
import { Redirect } from './components/Redirect';
import { NotFound } from './components/NotFound';
import { Post } from './components/Post';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />}>
          <Route path=':id' element={<Post/>} />
        </Route>
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
