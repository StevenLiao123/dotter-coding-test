import React from 'react';
import { categories, categoryData } from '../constants';
import './DotterScore.css';

export default () => <div className="dotter-score text-center ">
    <h4>Dotter Score</h4>
    <p className="dotter-score1 mb-0"><strong>{categoryData[categories.PRODUCT_QUALITY]}</strong></p>
    <p className="dotter-entry mb-4">Last entry 13 Auguest 2019</p>
    <button className="btn btn-red rounded-pill ml-auto">New Dotter</button>
</div>;