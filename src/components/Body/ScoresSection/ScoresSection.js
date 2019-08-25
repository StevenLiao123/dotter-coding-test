import React from 'react';
import PastScores from './PastScores';
import LatestScores from './LatestScores';
import '../../../styles/ScoresSection.css';

export default () => <section className="scores-section">
    <h1>score section</h1>
    <PastScores/>
    <LatestScores/>
</section>;
