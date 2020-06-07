import React, { Component } from 'react';
import axios from 'axios'
import NotificationData from './notificationData'
import '../styles/notification.css'
class Notification extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          notificationList: [],
        };
      }
      componentDidMount(){
        axios.get('https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json')
        .then(response =>{
          this.setState({notificationList : response.data.dasbhoardPage.notifications})
          console.log(response.data)
        })
        .catch(err =>{
    console.log('err')
        })
        
      }
    render() {
        const Notification = this.state.notificationList.map((data,pos)=>{
            return(
<NotificationData key={pos} pic={data.pic} message={data.message} time={data.time}/>

            )
        })
        return (
            <div className='container '>
                <h5 className='notificationLabel'>Notification List</h5>
                <div className='notificationDiv'>
                    {Notification}
                </div>
            </div>
        );
    }
}

export default Notification;