import { Grid } from "@mui/material";
import React from "react";
import AppContainer from "../Components/AppContainer";

function Destination() {
  // Links to the comis
  // Links to booking room (Will privatley tell people about fixed rate as believe only 20 rooms available)
  // Google maps
  // Taxi numbers / links
  return (
    <AppContainer>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <div
            style={{
              height: "100%",
              width: "100%",
              border: "black 2px solid",
              margin: "5px",
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              links to comis: https://www.comishotel.com/
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              links to booking rooms: https://www.comishotel.com/booking/stay/
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              google maps
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              taxi number / links
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppContainer>
  );
}

export default Destination;
