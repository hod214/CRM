import React, { Component } from 'react';

class OutstandingClients extends Component {
    constructor() {
        super()

    }

  render() {
    let clients = this.props.data.filter(d=> !d.sold).length
    return <div><i class="fas fa-user-plus"></i><br/>{clients} outstanding clients</div>
  }
    
}
    
export default OutstandingClients;
