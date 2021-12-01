import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';
import Protfolio from './components/Protfolio/Protfolio';
import Blog from './components/Blog/Blog';
import SimbaStore from './components/ProdectDetails/SimbaStore/SimbaStore';




function App() {
  return (
    <div className="App">
      <Router>
      <Navigation></Navigation>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/services'>
            <Services></Services>
          </Route>
          <Route path='/protfolio'>
            <Protfolio></Protfolio>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/simba'>
            <SimbaStore></SimbaStore>
          </Route>
          
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
