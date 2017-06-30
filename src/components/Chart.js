import React from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';

let basic = [['Answer', 'Votes']];

export default class resultChart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    basic = [['Answer', 'Votes']];
    const props = this.props;
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
  }
}

resultChart.propTypes = {
  polls: PropTypes.arrayOf(PropTypes.object).isRequired,
  index: PropTypes.number.isRequired,
};

// <img
//       className="responsive-img"
//       src="http://lh4.ggpht.com/-XFE_kS3lVQs/Umm4uMV2S4I/AAAAAAAARoY/JTz6mk68ZZk/image_thumb2.png?imgmax=800"
//       alt="chart"
//     />

// <PieChart width={730} height={250}>
//       <Pie dataKey="pieDataKey" data={data} cx="50%" cy="50%" outerRadius={80} label>
//         {data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index]} />)}
//       </Pie>
//     </PieChart>
