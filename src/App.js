import React from "react";
//Import Style
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUS from "./pages/ContactUs";
import Nav from "./components/Nav";
import MovieDetail from "./pages/MovieDetail";
//Router
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
        <Switch>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work" exact>
            <OurWork/>
          </Route>
          <Route path="/work/:id">
            <MovieDetail/>
          </Route>
          <Route path="/contact">
            <ContactUS/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
