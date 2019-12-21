import React, { Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap'
import './styles/home.css'

class Navbarr extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  render() {
    return (
      <div className='nav'>
<div className='container'>
<Navbar collapseOnSelect expand="lg" className='nav1'>
  <Navbar.Brand href="#home" className='nav3'>PRODUCT ADMIN</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
    <Nav className="ml-auto mr-auto">
      
      <a href="#features" className='nav2'>
        <i className="fas fa-tachometer-alt fa-2x iconspad" ></i>
        <br></br>
        Dashboard
        </a>

        <a href="#features" className='nav2 '>
        <i className="fas fa-file-alt fa-2x iconspad"></i>
        <br></br>
       Reports
        </a>
     
        <a href="#features" className='nav2'>
        <i className="fas fa-shopping-cart fa-2x iconspad" ></i>
        <br></br>
        Products
        </a>
        <a href="#features" className='nav2'>
        <i className="fas fa-user fa-2x iconspad"></i>
        <br></br>
      Accounts
        </a>
        <a href="#features" className='nav2'>
        <i className="fas fa-cog fa-2x iconspad"></i>
        <br></br>
        Settings
        </a>
    </Nav>

  
  
      
 
   
    <Nav>
      <a href="#login" className='nav2'>Admin,logout</a>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    
    </div>
  </div>
    );
  }
}

export default Navbarr;