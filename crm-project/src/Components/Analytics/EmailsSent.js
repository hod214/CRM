import React, { Component } from 'react';

class 
EmailsSent extends Component {
    constructor() {
        super()

    }

  render() {
      let emailsSent = this.props.data.filter(d=> d.emailType!==null).length
    return <div><i class="fab fa-mailchimp"></i><br/> {emailsSent} Emails sent </div>
  }
    
}
    
export default 
EmailsSent;
