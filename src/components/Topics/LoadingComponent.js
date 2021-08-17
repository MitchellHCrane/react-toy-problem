import React, { Component } from "react";

export default class LoadingComponent extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  toggleLoading() {
    // this.state.loading
    //   ? this.setState({ loading: false })
    //   : this.setState({ loading: true });

    if (this.state.loading) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
    }
    // this.state.loading ? (isLoading = false) : (isLoading = true);
    // this.setState({ loading: isLoading }); test comment
  }

  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4 style={{ marginBottom: "24px" }}>Is this component loading?</h4>
        <span style={{ margin: "24px 0" }}>
          {this.state.loading ? "Yes" : "No"}
        </span>

        <button
          className="confirmationButton"
          onClick={() => this.toggleLoading()}
        >
          Toggle Loading
        </button>
      </div>
    );
  }
}
