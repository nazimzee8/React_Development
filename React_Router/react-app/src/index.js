import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import { About, Article, Outlets, Anecdote } from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}>
        <Route path="" element={<Anecdote />} />
      </Route>
      <Route path ="/article" element={<Article />} />
      <Route path ="/outlets" element={<Outlets />} />
    </Routes>
  </BrowserRouter>
);
document.getElementById("root")
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
