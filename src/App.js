import React from 'react';
import theme from './constants/theme';
// import HomePage from "./pages/Home/HomePage"
// import LoginPage from './pages/LoginPage/LoginPage';
import { ThemeProvider } from "@material-ui/core"
import ProfilePage from './pages/ProfilePage/ProfilePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <HomePage/> */}
      {/* <LoginPage/> */}
      <ProfilePage/>
    </ThemeProvider>
  );
}

export default App;
