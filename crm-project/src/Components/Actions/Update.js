import React, { Component } from 'react'
import OwnersArrayMaker from './OwnersArrayMaker'
import EmailTypes from './EmailTypesMaker';
class Update extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            emailType:"",
            owner: ""
        }
    }
    
    update = async () => {
        const x = this.state
        await this.props.update(x.email, x.owner)
        this.props.gettingData()
    }
    changeValueToState =async (e)=>{
        console.log(e.target.className)
        await this.setState({ [e.target.className] : e.target.value})
    }
    updateSold =async ()=> {
        const x = this.state
        await this.props.updateSold(x.email,x.emailType)
        this.props.gettingData()
    }

    render() {
        return <div className="actions">
            <div className="titleInActions">Update</div>

                <span>Client:</span>
                <select onChange={this.changeValueToState} className="email" value={this.state.email}>
                <option>please Select...</option>
                {this.props.data.map(d => <option key={d.email} value={d.email}>{d.name}</option>)}
                </select>

                <span>Transfer ownership to:</span>
                <select className="owner" onChange={this.changeValueToState} value={this.state.owner} >
                    <option>please Select...</option>
                    {<OwnersArrayMaker key={this.props.data._id} data={this.props.data} />}
                </select>
                <button  onClick={this.update} value="Transfer owner" >Transfer owner</button>

                <span>email type:</span>
                <select className="emailType" placeholder="Email Type" onChange={this.changeValueToState} >
                <option>please Select...</option>
                    {<EmailTypes key={this.props.data._id} data={this.props.data} />}
                </select>
                <button onClick={this.updateSold}>Declare sold</button>
        </div>
    }
}

export default Update 