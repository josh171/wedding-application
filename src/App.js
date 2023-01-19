import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.scss'
import DayGuests from './Pages/RSVP/DayGuests';
import EveningGuests from './Pages/RSVP/EveningGuests';

export default function App() {
  // Home page (given by holly) 
  // two links to rsvp page (day, evening)
  // RSVP
  // Day
  // menu, time schedule, form to input their choices
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/rsvp/day" element={<DayGuests />} />
        <Route exact path="/rsvp/evening" element={<EveningGuests />} />
      </Routes>
    </BrowserRouter>
  );
}
