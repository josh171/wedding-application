import { ButtonBase, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import AppContainer from '../Components/AppContainer';
import { styled } from '@mui/material/styles';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});


function Menu() {
  return (
    <AppContainer>
      <CardContent className='menu-container'>
        <Typography variant='h6'>Starters / Appetisers</Typography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={4}>Goat's Cheese Tart</Grid>
          <Grid item xs={8}>
            <ButtonBase sx={{ width: 128, height: 128, background: 'green' }}>
              <Img alt="complex" src="/images/pink-flower-banner-image.jpg" />
            </ButtonBase>
          </Grid>
        </Grid>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={8}>Image</Grid>
          <Grid item xs={4}>Salmon</Grid>
        </Grid>
        <Typography variant='h6'>Mains</Typography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={4}>Chicken with Veg</Grid>
          <Grid item xs={8}>Image</Grid>
        </Grid>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={8}>Image</Grid>
          <Grid item xs={4}>Beef</Grid>
        </Grid>
        <Typography variant='h6'>Desserts</Typography>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={4}>Chocolate Profiteroles</Grid>
          <Grid item xs={8}>Image</Grid>
        </Grid>
        <Grid container spacing={3} alignItems='center'>
          <Grid item xs={8}>Image</Grid>
          <Grid item xs={4}>Sticky Toffee Pudding</Grid>
        </Grid>
      </CardContent>
    </AppContainer>
  );
}

export default Menu;