import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.scss";
import DayGuests from "./Pages/RSVP/DayGuests";
import EveningGuests from "./Pages/RSVP/EveningGuests";
import RsvpTable from "./Pages/Table";
import { SnackbarProvider } from "notistack";

export default function App() {
  // Home page (given by holly)
  // RSVP
  // Day
  // menu, time schedule, form to input their choices

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={5}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/rsvp/day" element={<DayGuests />} />
          <Route exact path="/rsvp/evening" element={<EveningGuests />} />
          <Route exact path="/table" element={<RsvpTable />} />
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}
