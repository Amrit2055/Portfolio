// import './App.css';
import './portfolio.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
// import Header from "./components/Header";
// import Particles from "react-particles-js";
import Banner from "./components/Banner";
import Services from "./components/Services"
import About from './components/About';
import Contact from './components/Contact';
import Skill from './components/Skill';
import ContactForm from './components/ContactForm';
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Redirect, Route, Switch } from "react-router";

function App() {
  return (
    <>
    {/* <Router> */}
      
    <Navbar />
    <Switch>
      <Route path="/" exact component={Banner} />
    {/* <Banner /> */}
    <Route path="/services" exact component={Services} />
    {/* <Services /> */}
    <Route path="/about" exact component={About} />
    {/* <About /> */}
    <Route path="/skill" exact component={Skill} />
    {/* <Skill /> */}
    <Route path="/contactform" exact component={ContactForm} />
    {/* <ContactForm /> */}
    <Route path="/contact" exact component={Contact} />
    {/* <Contact /> */}
    <Redirect to="/" />

    </Switch>
    {/* </Router> */}
    </>
  );
}

export default App;
