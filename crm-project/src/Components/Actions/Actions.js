import React, { Component } from 'react'
// import moment from 'moment' ;
import Update from './Update';
import OwnersArrayMaker from './OwnersArrayMaker'

class Actions extends Component {
    constructor() {
        super()
        this.state = {
                name: "",
                surname: "",
                country: "",
                owner: "",
                sold:false,
                emailType: "",
                email: "",
                
            }
        }
        componentWillMount= async () => {
           await this.props.gettingData()
        }


    addClient = async () => {
        debugger
        let x=this.state
        if(x.name===""||x.surname===""||x.country===""||x.owner===""||x.email===""){return}
        let client= {
            name:`${x.name} ${x.surname}`,
            country:x.country,
            owner:x.owner,
            sold:x.sold,
            firstContact: new Date,
            emailType:x.emailType,
            email:x.email,
        }
        this.props.fn(client)
    }
    
    inputChanged = async (e) => {
       await this.setState({ [e.target.id]: e.target.value })
    }

    update = async (id ,owner)=> {
       await this.props.update(id,owner)
    }

    updateSold = async (email,emailType) => {
       await this.props.updateSold(email,emailType)
    }

    render() {
        let client = this.state
        return <div className="actionsReturn">
        <div className="addClient">
            <Update data={this.props.data} updateSold={this.updateSold} update={this.update} gettingData={this.props.gettingData} />

            <form className="addClient" onChange={this.inputChanged} >
            <div className="titleInActions">Add Client</div>

                <input required placeholder="First Name" id="name" value={client.name} type="text" />
                <input required placeholder="Surname" id="surname" value={client.surname} type="text" />
                <input required placeholder="Country" id="country" value={client.country} type="text" />
                
                <select className="owner" onChange={this.inputChanged} id="owner"  value={this.state.owner} >
                <option>please Select...</option>
                    {<OwnersArrayMaker key={this.props.data._id} data={this.props.data} />}
                </select>
                <input required placeholder="Email" id="email" value={client.email} type="text" />                
            <button value="addClient" onClick={this.addClient}>addClient</button>
            </form>
        </div>
        </div>
    }
}
export default Actions