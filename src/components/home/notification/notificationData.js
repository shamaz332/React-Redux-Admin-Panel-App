import React from 'react';
import {Card,Button,Row,Col} from 'react-bootstrap'
import '../styles/notification.css'
const NotificationData = (props)=>{
    return(

    <Card className='notificationCard'>
<Row>
    <Col lg={3} md={3} sm={3} xs={3}>
  <img className='profilepic' src={props.pic} alt="profile-pic"/>
      </Col>
    <Col lg={9} md={9} sm={9} xs={9} >
<h6 style={{paddingTop:'20px'}}>{props.message}</h6>

    <h6 style={{color: '#bdcbd8'}}>{props.time }</h6>
    </Col>
  </Row>
</Card>


        )}


export default NotificationData;


