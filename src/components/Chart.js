import React from 'react';
// import { PieChart, Pie, Cell } from 'recharts';

import { Chart } from 'react-google-charts';

import { ExamplePolls } from '../data/ExampleData';

const data = [
	['Task', 'Hours per Day'],
	['Work', 11],
	['Eat', 2],
	['Win', 2],
	['TV', 2],
	['Sleep', 7],
];

const resultChart = () =>
  (<Chart
    chartType="PieChart"
    data={data}
    options={{
      title: 'Chart for: Answer X',
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
  />);

export default resultChart;

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
