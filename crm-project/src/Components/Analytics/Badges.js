import React, { Component } from 'react';
import Hottest from './Hottest'
import NewClients from './NewClients'
import EmailsSent from './EmailsSent'
import OutstandingClients from './OutstandingClients'
class Badges extends Component {
    constructor(){
        super()
        this.state ={ 
            data: []
        }

    }
    
    render() {
        return  <div className="badges">
            <NewClients data = {this.props.data} />
            <OutstandingClients data={this.props.data} />
            <EmailsSent data = {this.props.data} />
            <Hottest data = {this.props.data} />
        </div>
    }
}
export default Badges