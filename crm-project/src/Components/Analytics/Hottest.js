import React, { Component } from 'react';
class Hottest extends Component {
    constructor() {
        super()
        this.state = {}
    }
    
    hotcountry=()=>{
        let hotest={name:'',num:0}
        let countrys=this.props.data.map(c=>c.country)
        for(let  c of countrys){
        let num=this.props.data.filter(d=>d.country===c && d.sold===true)
        if(num.length>hotest.num){
            hotest.name=c
            hotest.num=num.length
        }
        }
        return hotest.name
    }
    render() {

        return <div class="hotbadge"><i className="fab fa-hotjar"></i><br/>{this.hotcountry()}</div>
    }
}
export default Hottest