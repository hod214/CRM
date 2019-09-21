import React, { Component } from 'react'

class EmailTypes extends Component {
    constructor(){
        super()
    }
    render(){
        const Duplicates = this.props.data.map(d=> d.emailType)
        const unique = [...new Set(Duplicates)] //removes duplications of abcd
        const uniquesArray = unique.filter(u=> u!==null).map(u=> <option value={u}>{u}</option>)
        return uniquesArray
    }
}
export default EmailTypes 