import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "../Dashboard";
import Register from "../Register";
import Login from "../Login";

function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact>
          <Dashboard />
        </Route>

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </div>
    </Router>
  );
}

export default App;
