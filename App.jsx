// App.jsx
//#region Imports
// import React from 'react';
// import { useState, useEffect } from 'react';
//import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { selectUserId } from './redux/user/userSlice.js';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { selectTheme } from './redux/theme/themeSlice';
import { redTheme, DlcThemes } from './themes/themes';
//import { TitleUpdater } from './routes/title-updater/title-updater.jsx';

import TrainingsPage from './app/trainings.feature.jsx'

export default function App() {
    const currentTheme = useSelector(selectTheme);
    let theme;
    const matchedTheme = DlcThemes.find((theme) => theme.name === currentTheme);
    if (matchedTheme) {
        theme = matchedTheme.themeDef;
    } else {
        // fall back to default theme.
        theme = redTheme;
    }

    const setCSSVariables = (theme) => {
        const root = document.documentElement;
      
        root.style.setProperty('--primary', theme.palette.primary.main);
        root.style.setProperty('--link', theme.palette.link.main);
      };
      
    setCSSVariables(theme);

    return (
        <ThemeProvider theme={theme}>
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
                                '--secondary-paper-background-color': theme.palette.background.secondaryPaper,
                                '--nav-background-color': theme.palette.navBackground.main,
                                '--contrast-text-color': theme.palette.navBackground.contrastText,
                                '--redline-text-color': theme.palette.redlineText,
                            }
                        }}
                    />
                    <TrainingsPage/>
                </CssBaseline>
            </LocalizationProvider>
        </ThemeProvider>
    );
}
