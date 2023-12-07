import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Game } from './game';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Game />
    </ThemeProvider>
  </StrictMode>
);
