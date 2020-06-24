import React, { Component } from 'react';
import './App.css';
import Chart from './components/chart';
import 'bootstrap/dist/css/bootstrap.min.css';
import db from './data.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      chartData: {}
    }
  }

  componentDidMount() {
    this.getChartData();
  }

  getChartData() {
    //API Call
    this.setState({
      chartData: {
        labels: db.labels,
        datasets: [
          {
            label: 'Population',
            data: db.data,
            backgroundColor: 'rgba(249, 161, 104 ,0.4)',
            borderColor: [
              'rgba(85, 85, 84 , 0.6)',
            ],
            pointBackgroundColor: 'rgba(244, 89, 33,0.8)',
            pointHoverBackgroundColor: 'rgba(241, 251, 25,0.9)',
            pointHoverRadius: '5'

          }
        ]
      }
    })
  }




  render() {
    return (
      <Chart data={this.state.chartData} />
    );
  }
}

export default App;
