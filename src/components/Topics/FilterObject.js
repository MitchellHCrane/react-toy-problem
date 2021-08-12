import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      unFilteredArray: [
        { name: "Mitchell", age: "25", "Hair Color": "Brown" },
        { name: "Michael", age: "25", "Hair Color": "Light Brown" },
        { name: "Wesley", age: "24", "Hair Color": "Light Brown" },
        { name: "Logan", age: "26", "Hair Color": "Dark Brown" },
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  handleChange(a) {
    console.log();
    this.setState({ userInput: a });
  }
  submit(userInput) {
    userInput = userInput.toLowerCase();
    let unFiltered = this.state.unFilteredArray;
    let filteredArray = this.state.filteredArray;

    for (let i = 0; i < unFiltered.length; i++) {
      if (unFiltered[i].hasOwnProperty(userInput)) {
        filteredArray.push(unFiltered[i]);
      }
    }
    this.setState({ filteredArrat: filteredArray });
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Unfiltered: {JSON.stringify(this.state.filteredArray)}
        </span>

        <input
          className="inputLine"
          onChange={(e) => this.handleChange(e.target.value)}
        ></input>

        <button
          className="confirmationButton"
          onClick={() => this.submit(this.state.userInput)}
        >
          Filter
        </button>

        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
