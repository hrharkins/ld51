import React from 'react';
import { 
  AppBar,
  Box,
  Container,
  createTheme,
  Link,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material';
import {
    GitHub
} from '@mui/icons-material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Page(props)
{
  const title = props.title;
  return (
    <ThemeProvider theme={ darkTheme }>
    <Box>
      <AppBar>
        <Container>
          <Toolbar>
            <Link href="https://github.com/hrharkins/ld51" 
                  target="https://github.com/hrharkins/ld51" 
                  sx={{ size: "large" }} mr
                  color="inherit">
              <GitHub/>
            </Link>
            <Typography variant='h6' component='div'>
              {title}
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar/>
      <Container>
        <Typography>
          Here...
        </Typography>
      </Container>
    </Box>      
    </ThemeProvider>
  );    
}