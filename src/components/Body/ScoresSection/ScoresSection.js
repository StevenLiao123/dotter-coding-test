import React from 'react';
import PastScores from './PastScores';
import LatestScores from './LatestScores';
import '../../../styles/ScoresSection.css';

export default () => <section className="scores-section px-5">
    <PastScores/>
    <LatestScores/>
</section>;
