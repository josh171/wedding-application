import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // make button in last picture
  return (
    <>
      <img className="home-image" src="/images/1.jpg" alt="Welcome" />
      <img className="home-image" src="/images/2.jpg" alt="Finer Details 1" />
      <img className="home-image" src="/images/3.jpg" alt="Finer Details 2" />
      <img className="home-image" src="/images/4.jpg" alt="RSVP Invatation" />
      <Box p={0}>
        <ButtonGroup fullWidth margin="dense" variant="outlined">
          <Button color="primary" onClick={() => navigate("/rsvp/day")}>
            Click for day guests
          </Button>
          <Button color="secondary" onClick={() => navigate("/rsvp/evening")}>
            Click for evening guests
          </Button>
        </ButtonGroup>
      </Box>
    </>
  );
}

export default Home;
