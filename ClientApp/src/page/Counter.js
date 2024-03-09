import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  render() {
    return (
      <div style={{marginTop:"100px"}}>
        <h1>api endpoint</h1>

        <p>This is a simple example of a api end point.</p>

        developement url : https://localhost:44420/weatherforecast/movies?page=1
        <br />
        <br />

        {/* <button className="btn btn-primary" onClick={this.incrementCounter}>open</button> */}
        <button className="btn btn-primary" onClick={() => window.open("https://localhost:44420/weatherforecast/movies?page=1")}>open</button>
        
      </div>
    );
  }
}
