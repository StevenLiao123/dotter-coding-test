import React from 'react';
import { Polar } from 'react-chartjs-2';
import { categories, categoryData, categoryColors } from '../constants';

const data = {
    datasets: [{
        data: Object.values(categoryData),
        backgroundColor: Object.values(categoryColors),
    }],
    labels: Object.values(categories),
};

export default () => <Polar data={data} />;