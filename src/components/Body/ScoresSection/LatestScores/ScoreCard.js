import React from 'react';
import PropTypes from 'prop-types';

export const ScoreCard = ({title, score, color}) => <div className="score-card" style={{
    borderBottom: `3px solid ${color}`
}}>
    <div className="score-card-header">{title}</div>
    <div className="score-card-body">{score}</div>
</div>;

ScoreCard.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
};