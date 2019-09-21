import React, { Component } from 'react'
import alertify from 'alertifyjs'

class PopUp extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surname: "",
            country: ""
        }

    }

    transterDataToUpdate =()=>{
        if(this.state.name===""||this.state.surname===""||this.state.country===""){return this.toggle()}
        let  whatToUpdate ={
             name:this.state.name,
             surname:this.state.surname,
             country:this.state.country
         }
         console.log(whatToUpdate)
         this.props.updateName(this.props.clientEmail,whatToUpdate)
    }


    toggle = () => {
        this.props.toggle()
    }

    changeValue = (e) => {
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        console.log(this.props.clientEmail)
        return <div className="popUp">
            <span onClick={this.toggle}>X</span>
            <div>
                <input type="text" placeholder=":name" onChange={this.changeValue} value={this.state.name} id="name" />
            </div>

            <div>
                <input type="text" placeholder=":surname" onChange={this.changeValue}  value={this.state.surname} id="surname" />
            </div>

            <div>

                <input type="text" placeholder=":country" onChange={this.changeValue} value={this.state.country} id="country" />
            </div>
            <button onClick={this.transterDataToUpdate}>submit</button>
        </div>
    }
}
export default PopUp