'use client';

import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeText { muted: string }
  interface Palette { outlineColumn: string }
  interface PaletteOptions { outlineColumn?: string}
  interface TypeBackground { footer: string }  
}


const theme = createTheme({
  breakpoints: {
    values: { xs: 0, sm: 640, md: 768, lg: 1024, xl: 1280 },
  },
  palette: {
    primary: { main: '#000000' , contrastText: '#fff', },
    secondary: { main: '#b6191a' , contrastText: '#fff', },
    background: { default: '#fbf9f4', paper: '#fff', footer: 'f5f3ee'},
    error: { main: '#ba1a1a' },
    text: { primary: '#1b1c19', secondary: '#374151', muted: '#6b7280' },
    divider: '#e5e2da',
    outlineColumn: '#d1cdc2',
  },

components: {
    MuiAppBar: {
      defaultProps: { color: 'transparent', elevation: 0 },
    },
  },

  typography: {
    fontFamily: '"Merriweather", serif',
    h1: {
      fontFamily: '"EB Garamond", serif',
      fontSize: '64px', 
      lineHeight: '68px', 
      fontWeight: 700, 
      letterSpacing: '-0.02em'
      },
    h2: { 
      fontFamily: '"EB Garamond", serif',
      fontSize: '44px', 
      lineHeight: '48px', 
      fontWeight: 600,
      letterSpacing: '-0.015em' , 
      },
    h3: {
      fontFamily: '"EB Garamond", serif',
      fontSize: '32px',
      lineHeight: '36px',
      fontWeight: 600 ,
      letterSpacing: '-0.01em'
    },
    body1: {
      fontFamily: '"Merriweather", serif',
      fontSize: '16px',
      lineHeight: '28px',
      fontWeight: 400,
      },
    body2: { 
      fontFamily: '"Merriweather", serif',
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: 400 ,
      },
      overline: {
        fontFamily: '"Hanken Grotesk", sans-serif',
        fontSize: '11px',
        lineHeight: '14px',
        fontWeight: 700
      },
      subtitle1: {
        fontFamily: '"EB Garamond", serif',
        fontSize: '21px',
        lineHeight: '32px',
        fontWeight: 400,
      },
      caption: {
        fontFamily: '"Merriweather", serif',
        fontSize: '12px',
        lineHeight: '18px',
        fontWeight: 400,
  }
},
}
);

export default theme;