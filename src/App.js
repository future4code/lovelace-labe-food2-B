import React from 'react';
import theme from './constants/theme';
import HomePage from "./pages/Home/HomePage"
import { ThemeProvider } from "@material-ui/core"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage/>
    </ThemeProvider>
  );
}

export default App;
