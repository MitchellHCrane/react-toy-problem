import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }
  handleChange(a) {
    this.setState({ userInput: a });
  }
  submit(b) {
    let even = [];
    let odd = [];
    let numArr = b.split(",");

    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] % 2 === 0) {
        even.push(parseInt(numArr[i], 10));
      } else {
        odd.push(parseInt(numArr[i], 10));
      }
    }
    this.setState({ evenArray: even, oddArray: odd });
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        >Odd or Even?</button>
        <span className="resultsBox">Evens: [{this.state.evenArray}]</span>
        <span className="resultsBox">Odds: [{this.state.oddArray}]</span>
      </div>
    );
  }
}
