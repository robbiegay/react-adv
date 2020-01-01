import React from 'react';
import Clock from './Clock';

class ClockState extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      format: "tic",
    }
  }
  render() {
    return(
      <Clock type={this.state.format} />
    );
  }
}

export default ClockState;
