import "./App.css";
import Datepicker from "./components/Datepicker";
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";

function App() {
  // let history=useHistory()
  return (
    <div className='App'>
      <h1>Welcome to Truck Scheduling</h1>
      <Router>
        <Link to='/login'>login</Link>
        <br/>
        <Link to='/datepicker'> Schedule a truck </Link>
        <Switch>
          <Route exact path='/login' component={Login}></Route>
          <Route exact path='/datepicker' component={Datepicker}/>     
        </Switch> 
      </Router>

    </div>
  );
}

export default App;
