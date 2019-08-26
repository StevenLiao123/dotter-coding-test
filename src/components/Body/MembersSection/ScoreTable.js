import React from 'react';
import { categories, categoryData } from '../constants';

export default () => <div className="container">
<h4>Member (3)</h4>         
<table className="table table-hover" data-toggle="table" data-sort-name="date" data-sort-order="desc">
  <thead>
    <tr>
      <th>Firstname</th>
      <th>Lastname</th>
      <th>{categoryData[categories.PRODUCT_QUALITY]}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>John</td>
      <td>Doe</td>
      <td>john@example.com</td>
    </tr>
    <tr>
      <td>Mary</td>
      <td>Moe</td>
      <td>mary@example.com</td>
    </tr>
    <tr>
      <td>July</td>
      <td>Dooley</td>
      <td>july@example.com</td>
    </tr>
  </tbody>
</table>

</div>