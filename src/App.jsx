import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: 0,
            pictures1: 0
        }
    };

    componentDidMount() {
        fetch('https://randomuser.me/api/?results=5')
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results.map((pic) => {
                    return (
                        <div key={pic.results}>
                            <img src={pic.picture.medium} />

                        </div>
                    )
                })
                this.setState({ pictures: pictures });
                // console.log("state", this.state.pictures);
            })
    }


    render() {

        return (



            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card red">
                            <h1>Pictures of People</h1>
                            {this.state.pictures}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card red">
                            <h2>Pictures of People</h2>
                            {this.state.pictures}
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="card">
                    <p className="centered">And here are the matches</p>
                    <button className="btn-success">Click here to make matches</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
