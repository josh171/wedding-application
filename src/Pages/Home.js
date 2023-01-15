import { Grid, Typography } from '@mui/material';
import React from 'react';
import AppContainer from '../Components/AppContainer';
import EventOutlinedIcon from '@mui/icons-material/EventOutlined';

function Home() {
  // two forms for breakfast and evening guests
  // qr code to navigate to website
  // Add a schedule page for info on day details

  // home
  // when and where in middle

  // destination / location
  // links to comis
  // links to booking
  // google maps
  // taxi numbers / links

  // rsvp
  // two forms for breakfast and evening guests

  // menu
  // list of description (given by holly)

  // gallery
  // dropbox for guests to send pictures



  // Questions to ask Holly!!!!
  // For RSVP page, better with no form before clikcing whether guest is attending in day or evening || Without form in background
  // Do we want a schedule? Yes
  // Do we want place where guests can have input on music? Yes
  return (
    <AppContainer>
      <div class="background">
        <div class="content">
          {/* <div className="square" />
          <div className="rectangle" /> */}
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