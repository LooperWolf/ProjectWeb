import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Uvalue: '',
            Pvalue: '',
            id: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    pullData = async () => {
        await fetch(`http://localhost:9000/slaves?user=${this.state.Uvalue}&pass=${this.state.Pvalue}`, {
            method: "POST",
            // body: JSON.stringify({
            //     user: this.state.Uvalue,
            //     pass: this.state.Pvalue
            // })
        }).then(response => response.json())
            .then(responseJson => {
                console.log(responseJson)
                this.props.history.push({
                    pathname: '/home',
                    state: {
                        _id: responseJson[0]._id,
                    }
                })
            })
            .catch(function (err) {
                console.log(err);
            });
        
    }
    handleChange(event) {
        console.log(event.target.id)
        if (event.target.id === 'name')
            this.setState({ Uvalue: event.target.value });
        else if (event.target.id === 'pass')
            this.setState({ Pvalue: event.target.value });
    }

    handleSubmit(event) {
        // alert('Username: ' + this.state.Uvalue);
        // alert('Password: ' + this.state.Pvalue);
        // this.potato()
        this.pullData()
        event.preventDefault();
    }
    // potato = () => {
    // this.props.history.push({
    //     pathname: '/home',
    //     state: {
    //         id: this.state.id,
    //     }
    // })
    // }
    render() {
        return (
            <div className="App">
                <img src={logo} className="App-logo" alt="logo" />
                <div style={{ backgroundColor: '#282c34', height: '100vh', color: 'white' }}>
                    Welcome to a Web Text Saver Powered by React!
                    <form style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }} onSubmit={this.handleSubmit}>
                        <label style={{ color: 'white', marginRight: 20, flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            Name
                            <input id='name' type="text" name="name" style={{ marginLeft: 20 }} placeholder="Enter Username" value={this.state.Uvalue} onChange={this.handleChange} />
                        </label>
                        <label style={{ color: 'white', marginRight: 20, flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                            Password
                            <input id='pass' type="text" name="pass" style={{ marginLeft: 20 }} placeholder="Enter Password" value={this.state.Pvalue} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Login" style={{ width: 100, backgroundColor: '#5FC1FF', borderWidth: 0, color: 'white', borderRadius: 10 }} />
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
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
//               <Link to="/">Login</Link>
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
//             <Login />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// function Login() {
//   return <h2>Login</h2>;
// }
