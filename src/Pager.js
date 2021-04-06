import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
class Pager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            Uvalue:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(this.props.location.state.id)
        if(event.target.id == 'name')
        this.setState({ Uvalue: event.target.value });
        else if(event.target.id == 'pass')
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
                <div style={{ backgroundColor: '#282c34', height: '100vh' }}>
                <textarea id='name' type="text" name="name" style={{ marginLeft: 20, height:"100%",width:"80%" }} placeholder="Enter Username" value={this.state.Uvalue} onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}
export default Pager;
