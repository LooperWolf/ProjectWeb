import './App.css';
import skull from './skull.png'
import React, { Component } from "react";
class Home extends Component {
    constructor(props) {
        super(props);
        this.data = ""
        // this.array = [[{
        //     id: 1,
        //     data: ''
        // }, {
        //     id: 2,
        //     data: ''
        // }, {
        //     id: 3,
        //     data: ''
        // }, {
        //     id: 4,
        //     data: ''
        // }, {
        //     id: 5,
        //     data: ''
        // }],]
        this.backuppotato = []
        this.state = {
            _id: '',
            Uvalue: '',
            Pvalue: '',
            array: [[{
                id: 1,
                data: ''
            }, {
                id: 2,
                data: ''
            }, {
                id: 3,
                data: ''
            }, {
                id: 4,
                data: ''
            }, {
                id: 5,
                data: ''
            }],]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        this.pullData()
    }
    pullData = async () => {
        await fetch(`http://localhost:9000/home/update?_id=${this.props.location.state._id}`, {
            method: "GET",

        }).then(response => {
            console.log(response)
            return response.json()
        })
            .then(responseJson => {
                console.log(responseJson[0])
                console.log(responseJson[0]['_id'])
                this.setState({
                    _id: responseJson[0]['_id'],
                    array: [[{
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
    }
    handleChange(event) {
        console.log(event.target.id)
        if (event.target.id === 'name')
            this.setState({ Uvalue: event.target.value });
        else if (event.target.id === 'pass')
            this.setState({ Pvalue: event.target.value });
    }

    handleSubmit(event) {
        alert('Username: ' + this.state.Uvalue);
        alert('Password: ' + this.state.Pvalue);

        event.preventDefault();
    }
    test(data) {
        console.log('potato')
        console.log(this.state._id)
        this.props.history.push({
            pathname: '/pg',
            state: {
                _id: this.state._id,
                id: data.id,
                data: data.data
            }
        })
    }
    render() {
        return (
            <div className="App" >
                <div className={this.state.array[0].some(element => element.data == '') ? null : "disco"} style={{ backgroundColor: '#282c34', height: '100vh', padding: '30vh', paddingTop: 10, paddingBottom: 10 }}>

                    {!this.state.array[0].some(element => element.data == '') ? <>
                    <div style={{ color: 'white' }}>YOU HAVE BEEN OWED!</div>
                    <div style={{ color: 'white' }}>Remove Your Debts to go back to normal!</div>
                    <div className='Death-Box'><img src={skull}></img></div></> 
                    : (<><div style={{ color: 'white' }}>You have a preset of Ten Pagers!</div>
                        <div style={{ color: 'white' }}>There are no Features to Add more</div>
                        <div style={{ color: 'white' }}>So don't be greedy</div></>)}
                    {this.state.array.map((ara, mtx) => {
                        return (<div style={{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
                            {ara.map((data, itx) => {
                                return <div
                                    onClick={() => this.test(data)}
                                    style={{
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        color: 'white',
                                        width: 150,
                                        height: 150,
                                        backgroundColor: data.data === '' ? '#5e677a' : 'red',
                                        borderRadius: 10,
                                        boxShadow: (-5 + itx * 2.5).toString() + 'px 10px 1px #222222',
                                        margin: 20,
                                    }}>
                                    {data.id}
                                </div>
                            })}
                        </div>)
                    })}
                </div>
            </div>
        );
    }
}
export default Home;
