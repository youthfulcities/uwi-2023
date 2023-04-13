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
import React, { useRef } from 'react';
import { Bar, getElementAtEvent } from 'react-chartjs-2';

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

const colours = {
  Ontario: '#F2695D',
  Alberta: '#673934',
  East: '#B8D98D',
  West: '#F6D9D7',
  Prairies: '#FBD166',
  Quebec: '#253D88',
  'Ontario-Quebec': '#7F3395',
};

const BarGraph = ({ parentData, max, setCurrentCity }) => {
  const chartRef = useRef();

  const scoreData = parentData.map((item) => item.score);
  const cityLabels = parentData.map((item) => item.city);
  const regionsColours = parentData.map((item) => colours[item.region]);
  const labels = cityLabels;

  const onClick = (event) => {
    const el = getElementAtEvent(chartRef.current, event)[0];
    const newCity = cityLabels[el.index];
    setCurrentCity(newCity);
  };

  const options = {
    indexAxis: 'y',
    aspectRatio: 0.75,
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
          delay = context.dataIndex * 100 + context.datasetIndex * 10;
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
          text: 'Overall score',
        },
        grid: {
          display: false,
        },
        max,
      },
      y: {
        ticks: {
          color: '#000',
          autoSkip: false,
          callback(index) {
            if (labels[index].length > 10) {
              return `${labels[index].substring(0, 10)}...`;
            }
            return labels[index];
          },
        },
        title: {
          display: true,
          text: 'City',
        },
        grid: {
          display: false,
        },
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

  const data = {
    labels,
    datasets: [
      {
        data: scoreData,
        backgroundColor: regionsColours,
        hoverBackgroundColor: regionsColours,
      },
    ],
  };

  return <Bar options={options} ref={chartRef} onClick={onClick} data={data} />;
};

export default BarGraph;