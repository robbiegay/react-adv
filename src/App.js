import React from 'react';
import Clock from './Clock';

class Controller extends React.Component {
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

function App() {
  return (
    <Controller />
  );
}

export default App;
