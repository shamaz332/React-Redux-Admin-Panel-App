import React, { Component } from 'react';
import axios from 'axios'
import './styles/table.css'
import TableData from './tableData.js'
import {Table} from 'react-bootstrap'
class  OrderTable extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      orderlist: [],
    };
  }
  componentDidMount(){
    axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    .then(response =>{
      this.setState({orderlist : response.data.dasbhoardPage.orders})
      console.log(response.data.dasbhoardPage.orders)
    })
    .catch(err =>{
console.log('err')
    })
    
  }


    render() {
      const OrderData = this.state.orderlist.map((product,pos) =>{
        return(
          <TableData orderNo={product.orderNo} status={product.status} operators={product.operators} location={product.location} distance={product.distance} startDate={product.startDate} deliveryDate={product.deliveryDate}/>
        )
      })

        return (
            <div className="tablefirstdiv container">
              <h6 className='orderhead'>Orders list</h6>
<div className='table'>
<Table responsive striped >
<thead>
  <tr>
      <th>ORDER NO.</th>
      <th>STATUS</th> 
      <th>OPERATORS</th>
      <th>LOCATION</th>
      <th>DISTANCE</th>
      <th>START DATE</th>
      <th>EST DELIVERY DUE</th>
    </tr>
  </thead>
{OrderData}
</Table>
</div>
</div>
        );
    }
}

export default OrderTable;