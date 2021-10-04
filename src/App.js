import React from "react";
//Import Style
import GlobalStyle from "./components/GlobalStyle";
//Import pages
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import ContactUS from "./pages/ContactUs";
import Nav from "./components/Nav";
//Router
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
        <switch>
          <Route path="/" exact>
            <AboutUs/>
          </Route>
          <Route path="/work">
            <OurWork/>
          </Route>
          <Route path="/contact">
            <ContactUS/>
          </Route>
        </switch>
    </div>
  );
}

export default App;
