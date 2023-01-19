import { Box, Toolbar } from '@mui/material';
import React, { useEffect, useState } from 'react';

function AppContainer({ children }) {
  const [data, setData] = useState({})
  // const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  console.log(data, error)
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