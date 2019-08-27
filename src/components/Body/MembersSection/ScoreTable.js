import React from 'react';
import { categories, categoryData } from '../constants';

export default () => <React.Fragment>
  <h5 className="text-dark">Member (3)</h5>
  <div className="table-responsive">
    <table className="table table-hover" data-toggle="table" data-sort-name="date" data-sort-order="desc">
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Dotter completed</th>
          <th>Latest result</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Dolor Sit</td>
          <td>17/07/19</td>
          <td>{categoryData[categories.PRODUCT_QUALITY]}</td>
        </tr>
        <tr>
          <td>Dolor Sit</td>
          <td>21/07/19</td>
          <td>{categoryData[categories.COLLABORATION]}</td>
        </tr>
        <tr>
          <td>Dolor Sit</td>
          <td>10/08/19</td>
          <td>8.1</td>
        </tr>
      </tbody>
    </table>
  </div>
</React.Fragment>;