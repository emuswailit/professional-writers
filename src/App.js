import Home from "./pages/Home";
import GlobalStyles from './components/globals/GlobalStyles'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Job from "./pages/Job";
import {redTheme,blueTheme,greenTheme, goldenTheme} from '../src/components/home/themes'
import { ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
function App() {
  const [theme, setTheme] = useState(redTheme);


  const handleThemeChange = () => {
    console.log("Clicked for change")
    if (theme.primaryColor === "red") {
      setTheme(greenTheme);
    } else if (theme.primaryColor === "green") {
      setTheme(blueTheme);
    } else if (theme.primaryColor === "blue") {
        setTheme(redTheme);
      }
  };


  return (
    <Router>
    <GlobalStyles/>
      <div>
     <ThemeProvider theme={theme}> <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/job">
            <Job handleThemeChange ={handleThemeChange} />
          </Route>
        </Switch></ThemeProvider>
      </div>

    </Router>
  );
}

export default App;
