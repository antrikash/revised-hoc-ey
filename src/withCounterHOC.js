import React from "react";

const UpdateComponent = (OriginalComponent) => {
  class NewComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        count: 0
      };
    }
    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + 1 };
      });
    };
    render() {
      return (
        <OriginalComponent
          increment={this.incrementCount}
          count={this.state.count}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdateComponent;
