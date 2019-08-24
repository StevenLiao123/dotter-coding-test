import React from 'react';
import { Line } from 'react-chartjs-2';
import { colors } from '../../constants';

const dates = [
    "01/01/19",
    "01/02/19",
    "01/03/19",
    "01/04/19",
    "01/05/19",
    "01/06/19",
    "01/07/19",
    "01/08/19",
];

const data1 = [
    7.8, 4.5, 5.5, 8, 5.7, 7.6, 5, 6
];
const data2 = [
    8, 5, 4.2, 6.3, 6, 7.8, 4.6, 7.5
];

const data = {
    datasets: [
        {
            label: "Overall dotter result",
            data: data2,
            borderColor: "white",
            fill: false,
        }, 
        {
            label: "Lorem ipsum",
            data: data1,
            backgroundColor: [colors.GREEN],
        }],
    labels: dates,

};

const options = {
    scales: {
        yAxes: [{
            ticks: { min: 0, max: 10 },
        }]
    }
};

export default () => <Line data={data} options={options} />;