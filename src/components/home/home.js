import React, { Component } from 'react';
import Navbarr from './navbar/navbar'
import MainGrid from './mainGrid.js'
import OrderTable from './orderList/table'
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';
class Home extends Component {
 componentDidMount() {
    axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
    .then(response => {
      localStorage.setItem('adminData', JSON.stringify(response.data));
    })
  }
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