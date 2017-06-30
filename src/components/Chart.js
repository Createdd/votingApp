import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

let basic = [['Answer', 'Votes']];

const resultChart = (props) => {
  basic = [['Answer', 'Votes']];
  (() => props.polls[props.index].answers.map(ans => basic.push([ans.answer, ans.votes])))();
  return (
    <Chart
      chartType="PieChart"
      data={basic}
      options={{
        title: `${props.polls[props.index].question}`,
        pieSliceText: 'label',
        slices: {
          1: { offset: 0.1 },
          2: { offset: 0.1 },
          3: { offset: 0.1 },
          4: { offset: 0.1 },
        },
        is3D: true,
        backgroundColor: '#616161',
      }}
      graph_id="PieChart"
      width="100%"
      height="400px"
      legend_toggle
    />
  );
};

resultChart.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

export default resultChart;
