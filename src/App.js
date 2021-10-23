import "./App.css";
import Datepicker from "./components/Datepicker";
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
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

          <button onClick={()=>fetch('/').then((data)=>console.log(data))}>click meeeeeeee</button>  

        </Switch> 
          
      </Router>

    </div>
  );
}

export default App;
