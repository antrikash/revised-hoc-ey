import React from "react";

import UpdateComponent from "./withCounterHOC";

class ClickCounter extends React.Component {
  render() {
    const { count, increment } = this.props;
    return <button onClick={increment}>Clicked {count} times</button>;
  }
}

export default UpdateComponent(ClickCounter);
