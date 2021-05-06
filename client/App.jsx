import React from 'react';
import ReactDOM from 'react-dom';
import Chart from 'chart.js';


class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div>APP
      <canvas id="af-canvas"></canvas>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));