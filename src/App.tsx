import React from 'react';
import './App.css';

interface State {
  top: number;
  left: number;
  bottom: number;
  right: number;
}

class App extends React.Component {
  state: State = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  }

  handleChange = (event: { target: { name: any; value: any; }; }) => {
    this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="App-logo" style={{borderRadius:`${this.state.top}px ${this.state.right}px ${this.state.bottom}px ${this.state.left}px`}}>
            <span className="App-text">
              {"Border radius"}
            </span>
          </div>
          <div className="App-input">
            <input type="number" className="top" name="top" value={this.state.top} onChange={this.handleChange} />
            <input type="number" className="right" name="right" value={this.state.right} onChange={this.handleChange} />
            <input type="number" className="bottom" name="bottom" value={this.state.bottom} onChange={this.handleChange} />
            <input type="number" className="left" name="left" value={this.state.left} onChange={this.handleChange} />
          </div>
          <div className="App-copy">
            <h3>Result</h3>
            <textarea className="copy-it">

            </textarea>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
