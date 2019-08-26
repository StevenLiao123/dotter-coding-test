import React from 'react';
import '../../../styles/ChartSection.css';
import PolarAreaChart from './PolarAreaChart';
import DotterOverview from './DotterOverview';
import Clipboard from './Clipboard';

export default () => <section className="chart-section">
    <DotterOverview />
    <Clipboard /> 
    <PolarAreaChart />
</section>;
