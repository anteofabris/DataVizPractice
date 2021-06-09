import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import LineChart from './LineChart.jsx'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: null
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    axios.get('/data')
    .then((response) => {
      console.log('got our data!', response.data)
      // set state here
      this.setState({
        data: response.data
      })
    })
    .catch((error) => {
      console.log('error getting our data!: ', error)
    })

  }

  render() {
    if (this.state.data) {
    return (<div>
      <LineChart data={this.state.data} />



    </div>)
    } else {
      return null;
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));