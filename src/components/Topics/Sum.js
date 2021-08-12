import React, { Component } from "react";

export default class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null,
    };
  }

  handleChangeA(a) {
    this.setState({ number1: parseInt(a) });
    console.log(a);
  }
  handleChangeB(b) {
    this.setState({ number2: parseInt(b) });
    console.log(b);
  }

  submit(number1, number2) {
    this.setState({ sum: number1 + number2 });
  }

  render() {
    return (
      <div className="puzzleBox sumPB">
        <h4>Sum</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChangeA(e.target.value)}
        ></input>
        <input
          className="inputLine"
          onChange={(e) => this.handleChangeB(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.number1, this.state.number2)}
        >
          Check
        </button>
        <span className="resultsBox">{this.state.sum}</span>
      </div>
    );
  }
}
