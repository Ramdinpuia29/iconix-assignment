import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Staff from "./components/Staff/Staff";
import Students from "./components/Students/Students";

import "./app.css";

function App() {
  return (
    <Router>
      <center>
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/staff">
            <Staff />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <footer>&copy; Lalramdinpuia B.E.(CSE), GCETLY</footer>
      </center>
    </Router>
  );
}

export default App;
