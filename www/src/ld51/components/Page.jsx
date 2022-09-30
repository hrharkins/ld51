import React from 'react';
import { 
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from '@mui/material';

export default function Page(props)
{
  const title = props.title;
  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' component='div'>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar/>
      <Container>
        <Typography>
          Here...
        </Typography>
      </Container>
    </Box>      
  );    
}