'use client';
//import { useDispatch, useSelector } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
//import { selectTheme } from './themeSlice.js';
import { redTheme, DlcThemes } from './themes.js';

import {TrainingsPage} from './trainings.feature.jsx';

export default function Home() {

    const queryClient = new QueryClient();

   // const currentTheme = 'redTheme';
    const theme = redTheme;
    // const matchedTheme = DlcThemes.find((theme) => theme.name === currentTheme);
    // if (matchedTheme) {
    //     theme = matchedTheme.themeDef;
    // } else {
    //     // fall back to default theme.
    //     theme = redTheme;
    // }

    const setCSSVariables = (theme:typeof redTheme) => {
        const root = document.documentElement;
      
        root.style.setProperty('--primary', theme.palette.primary.main);
        root.style.setProperty('--link', '#0000FF');
      };
      
    useEffect(() => {
      setCSSVariables(theme);
    }, [theme]);

    return (
        <ThemeProvider theme={theme}>
          <QueryClientProvider client = {queryClient}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <CssBaseline enableColorScheme={true}>
                    <GlobalStyles
                        styles={{
                            ':root': {
                                '--primary-color': theme.palette.primary.main,
                                '--secondary-color': theme.palette.secondary.main,
                                '--error-color': theme.palette.error.main,
                                '--warning-color': theme.palette.warning.main,
                                '--background-color': theme.palette.background.default,
                                '--paper-background-color': theme.palette.background.paper,
                                '--secondary-paper-background-color': '#f0f0f0',
                                '--nav-background-color': 'rgba(255,255,255,1)',
                                '--contrast-text-color': 'rgba(0,0,0,1)',
                                '--redline-text-color': 'rgb(255, 0, 0)',
                            }
                        }}
                    />
                    <TrainingsPage/>
                </CssBaseline>
            </LocalizationProvider>
            </QueryClientProvider>
        </ThemeProvider>
    );
}
