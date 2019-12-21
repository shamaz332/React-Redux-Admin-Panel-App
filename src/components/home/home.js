import React, { Component } from 'react';
import Navbarr from './navbar'
import MainGrid from './mainGrid.js'
import OrderTable from './table.js'
class Home extends Component {

  render() {
    return (
      <div>
<Navbarr/>
<MainGrid/>
<OrderTable/>
      </div>
    );
  }
}

export default Home;