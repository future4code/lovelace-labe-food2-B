import React from 'react';
import  HomePage  from './pages/Home/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import theme from './constants/theme';
import LoginPage from './pages/LoginPage/LoginPage';
import { ThemeProvider } from "@material-ui/core"

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <HomePage/> */}
      <LoginPage/>
    <SignUpPage/>
    </ThemeProvider>
  
  );

}

export default App;
