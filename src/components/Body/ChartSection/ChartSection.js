import React from 'react';
import './ChartSection.css';
import PolarAreaChart from './PolarAreaChart';
import DotterOverview from './DotterOverview';
import Clipboard from './Clipboard';
import DotterScore from './DotterScore';

export default () => <section className="chart-section px-5 pb-5">
    <DotterOverview />
    <Clipboard /> 
    <PolarAreaChart />
    <DotterScore />
</section>;
