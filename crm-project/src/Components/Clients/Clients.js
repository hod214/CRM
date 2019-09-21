import React, { Component } from 'react';
import Client from './Client';
import Search from './Search';
import PopUp from './PopUp'
class Clients extends Component {
    constructor() {
        super()
        this.state = {
            page: 0,
            pop : false,
            email: "",
            clientEmail: ''
        }
    }

    popup = async (e)=> {
        await this.state.pop ? this.setState({pop : false, clientEmail: ''}) : this.setState({pop : true, clientEmail: e})
    }
    pageUp = () => {

        this.setState({ page: this.state.page + 1 })
    }
    pageDown = () => {
        if (!this.state.page) { return }
        this.setState({ page: this.state.page - 1 })
    }
    render() {

        return <div>

            {this.state.pop ? <PopUp toggle={this.popup} clientEmail={this.state.clientEmail} data={this.props.data} updateName={this.props.updateName} /> : null}
            <Search fn={this.props.fn} gettingData={this.props.gettingData}  />

            <span onClick={this.pageDown}> {`<`}  </span> <span>{this.state.page * 20} - {this.state.page * 20 + 20}</span> <span onClick={this.pageUp}>  {`>`}</span>
            <div className="dataType">
                <span>Name</span>
                <span>Surname</span>
                <span>Owner</span>
                <span>Email Type</span>
                <span>Sold</span>
                <span>Country</span>
                <span>Date</span>

            </div>
            {this.props.data.slice((this.state.page * 20), (this.state.page * 20) + 20).map(d => <Client key={d._id} name={d.name} email={d.email} emailType={d.emailType} sold={d.sold} owner={d.owner} country={d.country} date={d.firstContact} toggle={this.popup} />)}

        </div>

    }
}
export default Clients