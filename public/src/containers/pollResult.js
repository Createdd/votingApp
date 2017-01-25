import React, { Component } from 'react';

export default class PollResult extends Component {
  componentDidMount() {
    this.loadPoll();
  }

  loadPoll() {
    var data = [
      { value: 300, color: '#F7464A', highlight: '#FF5A5E', label: 'Red' },
      { value: 50, color: '#46BFBD', highlight: '#5AD3D1', label: 'Green' },
      { value: 100, color: '#FDB45C', highlight: '#FFC870', label: 'Yellow' }
    ];
    var ctx = document
      .getElementById('result-' + this.props.id)
      .getContext('2d');
    Chart.defaults.global.responsive = true;
    var myPieChart = new Chart(ctx).Pie(data);
  }

  render() {
    return (
      <div className="result-chart">
        <canvas id={'result-' + this.props.id} />
      </div>
    );
  }
}
