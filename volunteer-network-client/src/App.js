import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Event from './components/Event/Event';
import AddEvents from './components/AddEvents/AddEvents';

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Event">Event</Link>
          </li>
          <li>
            <Link to="/AddEvents">AddEvents</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/Event">
            <Event/>
          </Route>
          <Route path="/AddEvents">
            <AddEvents/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
