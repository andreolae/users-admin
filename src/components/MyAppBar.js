import React from 'react';
import {ToggleThemeButton, AppBar, defaultTheme} from 'react-admin';
import Typography from '@mui/material/Typography';


const darkTheme = {
    palette: { mode: 'dark' },
};

export const MyAppBar = (props) => (
    
    <AppBar {...props} > 
    <Typography 
      flex="1" 
      variant="h6" >  
        
    </Typography>
  
        <ToggleThemeButton
            lightTheme={defaultTheme}
            darkTheme={darkTheme}
        />
    
    </AppBar>
);
