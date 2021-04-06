import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
class Home extends Component {
    constructor(props) {
        super(props);
        this.potato = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]
        this.backuppotato = []
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
    test(data) {
        console.log(data)
        this.props.history.push({
            pathname: '/pg',
            state: {
                id: 7,
            }
        })
    }
    render() {
        return (
            <div className="App">
                <div style={{ backgroundColor: '#282c34', height: '100vh', padding: '30vh', paddingTop: 10, paddingBottom: 10 }}>
                        <div style={{ color: 'white' }}>You have a preset of Ten Pagers!</div>
                        <div style={{ color: 'white' }}>There are no Features to Add more</div>
                        <div style={{ color: 'white' }}>So don't be greedy</div>
                    {this.potato.map((ara,mtx) => {
                        return (<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                            {ara.map((data, itx) => {
                                return <div onClick={() => this.test(itx)} style={{ justifyContent:'center',alignItems:'center',color:'white',width: 150, height: 150, backgroundColor: '#5e677a', borderRadius: 10, boxShadow: (-5 + itx * 2.5).toString() + 'px 10px 1px #222222', margin: 20 }}> {(5*mtx)+itx+1}</div>
                            })}
                        </div>)
                    })}

                </div>
            </div>
        );
    }
}
export default Home;
