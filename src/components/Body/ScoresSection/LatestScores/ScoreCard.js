import React from 'react';
import './styles/ScoreCard.css';
import PropTypes from 'prop-types';

export const ScoreCard = ({title, score, color, onClick, currentSelectedCard}) => <div className="score-card shadow position-relative" style={{
    borderBottom: `8px solid ${color}`,
    backgroundColor: currentSelectedCard === title ? color : "white"
}}>
    <div className="score-card-overlay position-absolute w-100 h-100" onClick={onClick} data-value={title}/>
    <div className="score-card-header">{title}</div>
    <div className="score-card-body">{score}</div>
</div>;

ScoreCard.propTypes = {
    title: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    currentSelectedCard: PropTypes.string.isRequired,
};