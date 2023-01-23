import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import CountryDetails from "./components/Countries/CountryDetails";
import About from "./components/About/About";
import "normalize.css";
import axios from "axios";
import Menu from "./components/Menu/Menu";
axios.defaults.baseURL= "https://jim-countries-production.up.railway.app/"
// axios.defaults.baseURL= "http://localhost:3002/"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/countries/:id" component={CountryDetails} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </div>
  );
}

export default App;
