import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
class Credits extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Uvalue: '',
            Pvalue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(event.target.id)
        if (event.target.id == 'name')
            this.setState({ Uvalue: event.target.value });
        else if (event.target.id == 'pass')
            this.setState({ Pvalue: event.target.value });
    }

    handleSubmit(event) {
        alert('Username: ' + this.state.Uvalue);
        alert('Password: ' + this.state.Pvalue);

        event.preventDefault();
    }
    render() {
        return (

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <div style={{ backgroundColor: '#282c34', height: '100vh' }}>
                </div>
            </div>
        );
    }
}
export default Credits;
