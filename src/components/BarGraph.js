/* eslint-disable import/no-extraneous-dependencies */
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  SubTitle,
  Title,
  Tooltip
} from 'chart.js';
import ChartDeferred from 'chartjs-plugin-deferred';
import React from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  ChartDeferred,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  SubTitle,
  Tooltip,
  Legend
);

ChartJS.defaults.font.family = 'Gotham Narrow Book';

const darkColours = ['#F2695D', '#253D88', '#FBD166', '#B8D98D', '#673934'];

const BarGraph = ({ parentData, max }) => {
  const options = {
    aspectRatio: 1.5,
    responsive: true,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
      },
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
    scales: {
      x: {
        ticks: {
          color: '#000',
        },
        title: {
          display: true,
          text: 'City',
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#000',
        },
        title: {
          display: true,
          text: 'Overall score',
        },
        grid: {
          display: false,
        },
        max,
      },
    },

    plugins: {
      legend: {
        display: false,
        position: 'top',
        color: '#000',
      },
      title: {
        display: false,
        text: '',
        color: '#000',
        font: {
          size: 14,
          family: 'Gotham Narrow Black',
        },
      },
      subtitle: {
        display: false,
        text: '',
        font: {
          family: 'Gotham Narrow Medium',
        },
      },
      deferred: {
        delay: 500,
        yOffset: '300px',
      },
    },
  };

  const scoreData = parentData.map((item) => item.score);
  const cityLabels = parentData.map((item) => item.city);
  const labels = cityLabels;

  const data = {
    labels,
    datasets: [
      {
        data: scoreData,
        backgroundColor: darkColours,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarGraph;
