import React from 'react';
// import theme from './constants/theme';
import { ThemeProvider } from "@material-ui/core"
import Router from "./routes/Router";

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <Router/>
    // </ThemeProvider>
  
  );

}

export default App;
