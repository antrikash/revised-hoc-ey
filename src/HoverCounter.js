import React from "react";

import UpdateComponent from "./withCounterHOC";

class HoverCounter extends React.Component {
  render() {
    const { count, increment } = this.props;
    return <h2 onMouseOver={increment}>Hovered {count} times</h2>;
  }
}

export default UpdateComponent(HoverCounter);
