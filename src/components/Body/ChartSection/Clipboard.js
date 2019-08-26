import React from 'react';
import '../../../styles/Clipboard.css';

const url = "http://dotter.com.au/wheels/dotter-101";

export default () => <div class="clipboard">
    <p><mark>Share the URL!</mark></p>
    <p>http://dotter.com.au/wheels/dotter-101</p> 
    <button onClick={() => {navigator.clipboard.writeText(url)}}><u>Copy to clipboard</u></button>
</div>;
