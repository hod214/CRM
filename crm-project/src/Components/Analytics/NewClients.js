import React, { Component } from 'react';
import moment from 'moment'
class NewClients extends Component {
    constructor() {
        super()

    }
findNewClients= () => {
    let a = moment(new Date)
    let newClients= this.props.data.map(d=> d.firstContact).filter(d=> a.diff(d,'days')<365 )
    return newClients.length
}


    render() {
        return <div> <i class="fas fa-user-clock"></i><br/>
        {this.findNewClients()} new clients </div>
    }

}

export default NewClients;
