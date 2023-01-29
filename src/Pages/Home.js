import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <img className="home-image" src="/images/1.jpg" alt="RSVP Invatation" />
      <Box p={3}>
        <ButtonGroup fullWidth margin="dense" variant="contained">
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
