import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.scss";
import DayGuests from "./Pages/RSVP/DayGuests";
import EveningGuests from "./Pages/RSVP/EveningGuests";
import { SnackbarProvider } from "notistack";

export default function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={5}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rsvp/day" element={<DayGuests />} />
          <Route exact path="/rsvp/evening" element={<EveningGuests />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}
