import React, { Component } from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';





class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: 0,
            pictures1: 0,
            cats: 0
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUpdate = this.componentWillUpdate.bind(this);
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


    componentWillUpdate() {
        fetch('https://api.thecatapi.com/v1/images/BkIEhN3pG?results=5')
            .then(results => {
                return results.json();
            }).then(data => {
                let cats = data.results.map((pic) => {
                    return (
                        <div key={pic.results}>
                            <img src={pic.picture.medium} />

                        </div>
                    )
                })
                this.setState({ cats: cats });
                
            })
    }


    render() {

        return (



            <div className="container">
                <h1 className="text-red lost">People Cat Matchmaker</h1>
                <hr></hr>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card red">
                            <h1>Pictures of People</h1>
                            {this.state.pictures}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card red">
                            <h2>Pictures of Cats</h2>
                            {this.state.cats}
                        </div>
                    </div>
                </div>
                <br></br>
                <br></br>
                <div className="col-lg-12">
                    <div className="card">
                    <p className="centered">And here are the matches</p>
                    <button className="btn-success"onClick={() => { this.componentDidMount(); this.componentWillUpdate(); }}>Click here to make matches</button>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
