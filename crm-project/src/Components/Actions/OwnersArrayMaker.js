import React, { Component } from 'react'

class OwnersOptionsMaker extends Component {
    constructor(){
        super()
    }
    render(){
        const Duplicates = this.props.data.map(d=> d.owner)
        const Unique = [...new Set(Duplicates)]
        return Unique.map(u=> <option value={u}>{u}</option>)
    }
}
export default OwnersOptionsMaker 