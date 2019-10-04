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
                this.setState({
                    cats: <img src={data[0].url} id='pipe'
                        style={{ maxHeight: 125, minHeight: 125, maxWidth: 125, minWidth: 125 }}></img>
                });
            })
    }


    render() {

        return (
            <>
                <div className="container">
                    <h1 className="lost text-brown" id='doggy'>What's your spirit cat?</h1>
                    <hr></hr>
                    <div className="row">
                        <div className="col-lg-6 slag">
                            <div className="grid-container">
                                <div className="item4">
                                    <div className="shadow">
                                        <h1 className='house card-header alert-primary shadow'>Human Form</h1>
                                        {/* <p className='stump'>This is a cat's form when its mind is confused, reincarnated as an introvert!</p> */}
                                    </div>
                                    <br></br>
                                    <div className="help">{this.state.pictures}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 slag">
                            <div className="grid-container">
                                <div className="item4">
                                    <div className="shadow">

                                        <h1 className='shed card-header alert-primary shadow'>Cat Form</h1>
                                        {/* <p className='pull-right'>This is a cat's form when he let's his nuts hang!</p> */}
                                    </div>
                                    <br></br>
                                    <div className="me">{this.state.cats}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br>
                    <br></br>
                    <div className="col-lg-12">
                        <button className="btn-primary btn-lg shadow hat btn-block" onClick={() => { this.peoplePics(); this.catImages(); }}>
                            Click here to find out what felines lurk in people!</button>
                        <br></br>
                        <br></br>
                        <hr></hr>
                    </div>
                </div>

            </>
        );
    }
};

export default App;
