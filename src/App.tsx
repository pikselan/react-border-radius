import React from 'react';
import copy  from 'copy-to-clipboard';
import './App.css';

interface State {
  top: number;
  left: number;
  bottom: number;
  right: number;
  set: string;
  unit: string;
  copied: boolean;
}

interface Handle {
  target: {
    name: any;
    value: any;
  }
}

class App extends React.Component {
  state: State = {
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    set: "border-radius",
    unit: "px",
    copied: false
  }

  handleChange = (event: Handle ) => {
    this.setState({ [event.target.name] : event.target.value });
  }

  render() {
    let { top, right, bottom, left, unit, set } = this.state;

    let value = `${top}${unit} ${right}${unit} ${bottom}${unit} ${left}${unit}`;
    let css = `${set}: ${value};`;
    let webkit = `-webkit-${set}: ${value};`;
    let moz = `-moz-${set}: ${value};`;

    let text = `${css}\n${webkit}\n${moz}`;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Border Radius style (px)</h1>
          
          <div className="box">
            <div className="App-logo" style={{borderRadius:`${value}`}}></div>
            <input type="number" className="top" name="top" value={top} onChange={this.handleChange} />
            <input type="number" className="right" name="right" value={right} onChange={this.handleChange} />
            <input type="number" className="bottom" name="bottom" value={bottom} onChange={this.handleChange} />
            <input type="number" className="left" name="left" value={left} onChange={this.handleChange} />
          </div>

          <div className="App-copy">
            <h3>Result</h3>
            <textarea className="copy-it" name="text" value={text} readOnly></textarea>
            <br />
            <button onClick={() => {copy(text); this.setState({copied: true})}}>Copy!</button>
            {
              this.state.copied ? <span>Copied</span> : null
            }
          </div>
        </header>
      </div>
    );
  }
}

export default App;
