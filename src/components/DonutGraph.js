import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import ChartDeferred from 'chartjs-plugin-deferred';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ChartDeferred, Tooltip, Legend, ArcElement);

ChartJS.defaults.font.family = 'Gotham Narrow Book';

const DonutGraph = ({ parentData, color }) => {
  const options = {
    aspectRatio: 1,
    responsive: true,
    layout: {
      padding: {},
    },
    animation: {
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default') {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },

    plugins: {
      legend: {
        display: false,
        position: 'top',
        color: '#000',
      },
      deferred: {
        delay: 100,
        yOffset: '100px',
      },
    },
  };

  const scoreData = [parentData.score, 100 - parentData.score];
  const labels = [parentData.topic_en, 'Remainder'];

  const data = {
    labels,
    datasets: [
      {
        data: scoreData,
        backgroundColor: [color, '#CBCBCB'],
        hoverBackgroundColor: [color, '#CBCBCB'],
        hoverBorderWidth: 0,
        hoverOffset: 10,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};

export default DonutGraph;
