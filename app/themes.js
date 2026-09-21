import { createTheme } from '@mui/material/styles';

const components = {
  MuiContainer: {
    styleOverrides: {
      root: {
        minWidth: '100%',
      },
    },
  },
  MuiDialog: {
    defaultProps: {
      disableScrollLock: true,
    },
  }
}

export const redTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: 'rgba(210,25,25,0.78)',
    },
    divider: '#ff0000',
    secondary: {
      main: '#f44336',
      light: '#e57373',
    },
    error: {
      main: '#ff0f00',
    },
    warning: {
      main: '#de8602',
      contrastBackground: '#FFAB00'
    },
    redlineText: 'rgb(255, 0, 0)',
    link: {
      main: '#0000FF',
    },
    background: {
      default: '#f9f9f9',
      paper: '#e6e6e6',
      paperEngrHold: 'rgba(255, 202, 87, 1)',
      secondaryPaper: '#f0f0f0',
      formPaper: '#f0f0f0',
      formBackground: '#e6e6e6',
    },
    navBackground: {
      main:'rgba(255,255,255,1)',
      contrastText: 'rgba(0,0,0,1)'
    }
  },
  components: components,
})

export const redThemeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: 'rgba(210,25,25,0.78)',
    },
    divider: '#ff0000',
    secondary: {
      main: '#f44336',
      light: '#e57373',
    },
    error: {
      main: '#ff0f00',
    },
    warning: {
      main: '#fcba03',
      contrastBackground: '#FF6F00'
    },
    redlineText: 'rgba(255, 0, 0, 1)',
    link: {
      main: '#00FFFF',
    },
    background: {
      default: 'rgba(10,10,10,1)',
      paper: 'rgba(20,20,20,1)',
      paperEngrHold: 'rgba(27, 0, 0, 1)',
      secondaryPaper: 'rgba(50,50,50,1)',
      formBackground: 'rgba(30,30,30,1)',
      formPaper: 'rgba(30,30,30,1)',
    },
    navBackground: {
      main:'rgba(15,15,15,1)',
      contrastText: 'rgba(255,255,255,1)'
    }
  },
  components: components,
})

export const DlcThemes = [
  {name: 'redTheme', themeDef:redTheme},
  {name: 'redThemeDark', themeDef:redThemeDark},
];
