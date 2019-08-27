import React from 'react';
import PastScores from './PastScores';
import LatestScores from './LatestScores';
import './ScoresSection.css';

export default () => <section className="scores-section px-5 py-5">
    <PastScores/>
    <LatestScores/>
</section>;
