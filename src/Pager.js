import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
class Pager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            Dvalue: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        console.log('tomato')
        console.log(this.props.location.state)
        this.setState({ Dvalue: this.props.location.state.data })
    }
    handleChange(event) {
        console.log(this.props.location.state.id)
        if (event.target.id == 'name')
            this.setState({ Dvalue: event.target.value });
        else if (event.target.id == 'pass')
            this.setState({ Pvalue: event.target.value });
    }

    handleSubmit = async (event) => {
        console.log('potato')
        await fetch(`http://localhost:9000/pg/update?_id=${this.props.location.state._id}&id=${this.props.location.state.id}&data=${this.state.Dvalue}`, {
            method: "PUT",
           
        }).then(response => {
            console.log(response)
            return response.json()
        })
            .then(responseJson => {
                console.log(responseJson[0])
                this.setState({
                    array: [[{
                        _id: responseJson[0]['_id'],
                        id: 1,
                        data: responseJson[0]['1']
                    }, {
                        id: 2,
                        data: responseJson[0]['2']
                    }, {
                        id: 3,
                        data: responseJson[0]['3']
                    }, {
                        id: 4,
                        data: responseJson[0]['4']
                    }, {
                        id: 5,
                        data: responseJson[0]['5']
                    }],]
                })
            })
            .catch(function (err) {
                console.log(err);
            });
            this.props.history.goBack()
        event.preventDefault();
    }
    render() {
        return (
            <div className="App">
                <div style={{ backgroundColor: '#282c34', height: '100vh' }}>
                    <textarea id='name' type="text" name="name" style={{ marginLeft: 20, height: "50%", width: "80%" }} placeholder="Start Debt" value={this.state.Dvalue} onChange={this.handleChange} />
                    <button style={{ height: 60, width: 90, backgroundColor: '#5FC1FF', borderWidth: 0, borderRadius: 10 }} onClick={this.handleSubmit} >Send</button>
                </div>
            </div>
        );
    }
}
export default Pager;
