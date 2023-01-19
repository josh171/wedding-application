import { Grid, Typography } from '@mui/material';
import React from 'react';
import AppContainer from '../Components/AppContainer';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

function Home() {
  return (
    <AppContainer>
      <div class="background">
        <div class="content">
          <img className="image" src="/images/disneyland_paris.jpeg" alt="home banner" />
          <Typography variant='body1' className="text">To help celebrate</Typography>
          <Typography variant='h4' className="text">Josh & Holly's</Typography>
          <Typography variant='body1' className="text">Wedding day</Typography>
          <Typography variant='h5' className="text">April 29th 2023</Typography>
          <Typography variant='body1' className="text">At The Comis Hotel, Mount Murray</Typography>
          <Grid container spacing={3} className='text'>
            <Grid item xs={12}>
              <EventOutlinedIcon sx={{ color: 'white' }} fontSize='large' />
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <strong>Date:</strong> 29th April 2023
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <strong>Time:</strong> 12:00 pm
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <strong>Location:</strong> Mount Murray Back Rd, Douglas, Isle of Man IM4 2HT
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </AppContainer>
  );
}

export default Home;