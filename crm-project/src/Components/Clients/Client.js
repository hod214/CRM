import React, { Component } from 'react'
import moment from 'moment'
import alertify from 'alertifyjs'

class Client extends Component {
    constructor() {
        super()

        this.state ={
            url:""
        }
    }
    // alerter=(e)=>{
    //     console.log(e)
    //     alertify.alert().set('message', `you clicked on`).show() 
    // }
    toggle=()=>{
        this.props.toggle(this.props.email)
    }

    render() {
        
        let d = this.props
        let splited = d.name.split(" " , 2)
        return <div className="client" url={d.email} data-myval={splited} onClick={this.toggle} >
            <div className="name">
            {splited[0]}
            </div>
            <div url={d.email} className="surName">
            {splited[1]}
            </div>
            <div url={d.email} className="owner">
                {d.owner} 
            </div>
            <div url={d.email} className="emailType">
                {d.emailType} 
            </div>
            <div url={d.email} className="sold">
                {d.sold ? "sold" :"Not sold yet"} 
            </div>
            <div url={d.email} className="country">
                {d.country} 

            </div>
            <div url={d.email} className="date">
                {moment(d.date).format("L")}
            </div>

        </div>
    }
}
export default Client