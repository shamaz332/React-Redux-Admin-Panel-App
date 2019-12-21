import React, { Component } from 'react';
import {Table} from 'react-bootstrap'
        const TableData = (props)=>{
        return(

            

  <tbody>
    <tr>
        <td>{props.orderNo}</td>
        <td>{props.status}</td>
      <td>{props.operators}</td>
      <td>{props.location}</td>
      <td>{props.distance}</td>
      <td>{props.startDate}</td>
      <td>{props.deliveryDate}</td>
    </tr>
   
  </tbody>

            )}
  

export default TableData;
