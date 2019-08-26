import React from 'react';
import '../../../styles/DotterScore.css';
import { categories, categoryData } from '../constants';

export default () => <div className="dotter-score">
    <div className="form-inline">
        <h4>Dotter Score</h4>
        <h2><strong>{categoryData[categories.PRODUCT_QUALITY]}</strong></h2>
        <p>Last entry 13 Auguest 2019</p>
        <br />
        <button className="button1 ml-auto">New Dotter</button>
        <p><mark>Share the URL!</mark></p>
    <p>http://dotter.com.au/wheels/dotter-101</p> 

    </div>
</div>;