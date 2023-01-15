import { AppBar, Box, Button, CssBaseline, Grid, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    label: 'Home',
    to: '/'
  },
  {
    label: 'Destination',
    to: '/destination'
  },
  {
    label: 'RSVP',
    to: '/rsvp'
  },
  {
    label: 'Menu',
    to: '/menu'
  },
  {
    label: 'Gallery',
    to: '/gallery'
  }
]

function AppContainer({ children }) {
  const navLinkStyle = { color: 'black', textDecoration: 'none' }
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    fetch('https://data.mongodb-api.com/app/data-ifnal/endpoint/data/v1')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result)
        setData(result);
      },
      (error) => {
        setError(error);
      }
    )
  }, [])
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ background: '#fff' }}>
        <Toolbar>
          <Grid container spacing={3}>
            {navLinks.map((link, index) => {
              return (
                <Grid item key={index}>
                  <Button variant='inherit'>
                    <NavLink to={link.to} style={navLinkStyle}>
                      {link.label}
                    </NavLink>
                  </Button>
                </Grid>
              )
            })}
          </Grid>
        </Toolbar>
      </AppBar>
      <Box
        component="main"
        sx={{ flexGrow: 1 }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}

export default AppContainer;