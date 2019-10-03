import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pictures: '',
            cats: ''
        }
        this.peoplePics = this.peoplePics.bind(this);
        this.catImages = this.catImages.bind(this)
    };

    peoplePics() {
        fetch('https://randomuser.me/api/?results=1')
            .then(results => {
                return results.json();
            }).then(data => {
                let pictures = data.results.map((pic, index) => {
                    return (
                        <div key={index}>
                            <img src={pic.picture.medium} style={{ minHeight: 125 }} />
                        </div>
                    )
                })
                this.setState({ pictures: pictures });
            })
    }

    catImages() {
        fetch('https://api.thecatapi.com/v1/images/search?')
            .then(results => results.json())
            .then(data => {
                let cats = <img src={data[0].url}></img>
                this.setState({ cats: <img src={data[0].url} style={{maxHeight: 125, minHeight: 125, maxWidth: 125, minWidth: 125}}></img> });
            })
    }


    render() {

        return (
            <>
                <div className="container">
                    <h1 className="text-red lost">Whats your spirit cat</h1>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card red">
                                <h1>Human Form</h1>
                                {this.state.pictures}
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card red">
                                <h1>Cat Form</h1>
                                {this.state.cats}
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-lg-12">
                        <div className="card">
                            <button className="btn-success" onClick={() => { this.peoplePics(); this.catImages(); }}>Click here to find out what cat lurks in you!</button>
                        </div>
                    </div>
                </div>
            </>
        );
    }
};

export default App;
