import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSinglePoll } from './actions/index';
import axios from 'axios';

class PollResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          value: 1,
          label: 'no votes yet',
          color: 'lightGrey',
          highlight: 'lightGrey'
        }
      ]
    };
  }
  componentDidMount() {
    axios.get('http://loclahost:3000/api/polls/' + this.props.id).then(data => {
      console.log(data);
      this.loadPoll(data.data);
    });
  }

  randomColor() {
    let hexList = '0123456789ABCDEF';
    let color = '#';
    let highlight = '#';
    for (let i = 0; i < 6; i++) {
      let num = Math.floor(Math.random() * 15);
      if (num + 2 > 15) {
        num -= 2;
      }
      color += hexList[num];
      highlight += hexList[num + 2];
    }
    return [ color, highlight ];
  }

  loadPoll(data) {
    let choices = data.choices;
    let newdata;
    if (data.totalVotes === 0) {
      newdata = [
        {
          value: 1,
          label: 'No votes yet',
          color: '#cccccc',
          highlight: '#eeeeee'
        }
      ];
    } else {
      newdata = Object.keys(choices).map(choice => {
        // random color each time rendered
        let colors = this.randomColor();
        console.log(colors);
        console.log('value: ', choices[choice], ', label: ', choice);
        return {
          value: choices[choice],
          label: choice,
          color: colors[0],
          highlight: colors[1]
        };
      });
    }

    const ctx = document
      .getElementById('result-' + this.props.id)
      .getContext('2d');
    Chart.defaults.global.responsive = true;
    const myPieChart = new Chart(ctx).Pie(newdata);
  }

  render() {
    return (
      <div className="result-chart">
        <canvas id={'result-' + this.props.id} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { poll: state.polls.singlePoll };
}

export default connect(mapStateToProps, { fetchSinglePoll })(PollResult);
