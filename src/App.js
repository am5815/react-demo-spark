import React, { useState, useContext } from "react";
import logo from './logo.svg';
import './App.css';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import LoginComponent from "./LoginComponent";
import HomeComponent from "./HomeComponent";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router} from "react-router-dom";
function App() {

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  

  const [validationPassed, setValidationPassed] = useState(false);
  const [validationFailed, setValidationFailed] = useState(false);

  

  return (
    <Router>
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <header className="App-header">
          
          <Switch>
            <Route path="/home">
              <HomeComponent />
            </Route>
            <Route path="/">
              <LoginComponent data={{setValidationFailed, setValidationPassed, validationPassed, validationFailed}} />
            </Route>
          </Switch>
          
        </header>
      </ThemeProvider>
    </div>
    </Router>
  );
}

export default App;
