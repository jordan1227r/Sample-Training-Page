// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';
// import { defaultTheme, redTheme } from '../../themes/themes';

let initialTheme;
if(localStorage.getItem('theme')){
    initialTheme = localStorage.getItem('theme');
} else {
    initialTheme = 'redTheme';
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        currentTheme: initialTheme, // default value, you can set this from local storage or user settings
    },
    reducers: {
        setTheme: (state, action) => {
            state.currentTheme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
