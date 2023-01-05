import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import reportWebVitals from './reportWebVitals';

import CadastroVideo from './pages/cadastro/Video';
import Page404 from './pages/Page404';
import CadastroCategoria from './pages/cadastro/Categoria';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastro/video" element={<CadastroVideo />} />
      <Route path="/cadastro/categoria" element={<CadastroCategoria />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  </BrowserRouter>,
);

reportWebVitals();
