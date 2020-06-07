import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../styles/home.css";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';

class Navbarr extends Component {
  state = {
    showHiddenMenu : false
}
toDashBoard = React.createRef();
toProducts = React.createRef();
toAccounts = React.createRef();
hiddenMenu = React.createRef();

onHandleRedirect = (e) => {
  if (!this.props.userLoggedInStatus) {
      e.preventDefault();
  } else this.setState({showHiddenMenu: false});
}

onToggle = () => {
  this.setState({showHiddenMenu: !this.state.showHiddenMenu});
}

componentDidUpdate() {
  document.querySelectorAll('.hidden-menu a').onClick = () => {
      this.setState({showHiddenMenu: false});
  }
}
  render() {
    return (
      <div className="nav">
        <div className="container">
          <Navbar collapseOnSelect expand="lg" className="nav1">
            <Navbar.Brand href="#home" className="nav3">
            <NavLink to="/"><h1>Product Admin</h1></NavLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto mr-auto">
              <NavLink activeClassName='is-active' ref={this.toDashBoard} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/dashboard">

                <a className="nav2">
                  <i className="fas fa-tachometer-alt fa-2x iconspad"></i>
                  <br></br>
                  Dashboard
                </a>
                </NavLink>


                <NavLink activeClassName='is-active' ref={this.toProducts} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/products">

                <a href="#features" className="nav2">
                  <i className="fas fa-shopping-cart fa-2x iconspad"></i>
                  <br></br>
                  Products
                </a>
                </NavLink>

                <NavLink activeClassName='is-active' ref={this.toAccounts} onClick={(e)=>this.onHandleRedirect(e)} className="nav-link" to="/accounts">
                <a className="nav2">
                  <i className="fas fa-user fa-2x iconspad"></i>
                  <br></br>
                  Accounts
                </a>
                </NavLink>
              </Nav>

              <Nav></Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Navbarr;
