import React from 'react';
import './App.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {console.log(this.state.date.getSeconds() % 2 === 0)}
        {this.state.date.getSeconds() % 2 === 0 ?
          <h2>TIC</h2> :
          <h2>TOC</h2>
        }
      </div>
    );
  }
}

function App() {
  return (
    <Clock />
  );
}

export default App;
