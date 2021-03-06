import Login from './Login'
import Home from './Home'
import Credits from './Credits'
import Pager from './Pager'
import './App.css';
import React, { Component } from "react";
import Default from "./default"
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
class App extends Component {
  constructor() {
    super();
  }
 
  render() {
    return (
      <Router>
        <header className="Main-header" >
          <Link to="/"> 
          <img src={logo} className="Main-logo" alt="logo" />
          </Link>
        </header>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                  <Redirect to="/login" />
              )
            }}
          />
          <Route component={Login} path="/login" exact />
          <Route component={Home} path="/home" exact />
          <Route component={Credits} path="/creds" exact />
          <Route component={Pager} path="/pg" exact />
          <Route component={Default} path="/Default" exact />
        </Switch>
        <footer className="Main-footer">
        <Link to="/creds"> 
          <img src={logo} className="Main-logo" alt="logo" style={{justifyContent:'right'}} />
          </Link>
        </footer>
      </Router>
    );
  }
}

export default App;
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
