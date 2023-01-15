import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Destination from './Pages/Destination';
import Gallery from './Pages/Gallery';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Rsvp from './Pages/Rsvp';
import './App.scss'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/rsvp" element={<Rsvp />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}
