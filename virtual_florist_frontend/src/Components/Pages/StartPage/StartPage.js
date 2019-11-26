import React, { Component } from "react";

class StartPage extends Component {
  componentWillMount() {
    this.props.history.push("/mainPage");
  }
  render() {
    return <div></div>;
  }
}

export default StartPage;
