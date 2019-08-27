import React from 'react';
import './Clipboard.css';

const url = "http://dotter.com.au/wheels/dotter-101";

export default () => <div className="clipboard row mx-0 my-4">
    <div className="col-sm-3">
        <h5 className="m-0">Share the URL!</h5>
        <p className="text-break m-0">http://dotter.com.au/wheels/dotter-101</p>
        <button className="p-0" onClick={() => { navigator.clipboard.writeText(url) }}><u>Copy to clipboard</u></button>
    </div>
</div>;
