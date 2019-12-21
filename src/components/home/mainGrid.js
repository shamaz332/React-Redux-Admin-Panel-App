import React, { Component } from 'react';
import {Row,Col} from 'react-bootstrap'
import './styles/mainGrid.css'
class  MainGrid extends Component {
    render() {
        return (
            <div className='container'>
                <h6 className="adminHead">Welcome back,Admin</h6>
               
   <Row>
    <Col className='colodd'>
  
    </Col>
    <Col className='col'>
    
    </Col>
  </Row>
  <Row>
    <Col className='colodd'>
  
    </Col>
    <Col className='col'>
    
    </Col>
  </Row>

                </div>
        
        );
    }
}

export default MainGrid;