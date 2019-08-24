import React from 'react';
import PassedScores from './PassedScores';
import LatestScores from './LatestScores';

export default () => <section className="scores-section">
    <h1>score section</h1>
    <PassedScores/>
    <LatestScores/>
</section>;
