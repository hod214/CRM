import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Clients from './Components/Clients/Clients.js'
import Actions from './Components/Actions/Actions.js'
import Analytics from './Components/Analytics/Analytics'
// import Clients from
class App extends Component {
  constructor() {
    super()
    this.state = {
      users: [],
      data: []
    }
  }

  gettingData = async () => {
    let clientsData = await axios.get("http://localhost:8888/clients")
    // console.log(clientsData) || return an Object with Key DATA !!!!!!
    this.setState({ users: clientsData.data, data: clientsData.data })
  }
  addClientFromActionsToDb = async (client) => {
    console.log(client)
    await axios.post('http://localhost:8888/actions', client)
    this.gettingData()
  }

  updateClientOwnerFromActionsToDb = async (email, owner) => {
    console.log(owner)
    const ownerData = { "Owner": owner }
    await axios.put(`http://localhost:8888/actions/update/${email}`, ownerData, () => {
      this.gettingData()
    })
  }

  makeClientSold = async (email, emailType) => {
    console.log('got to app')
    console.log(emailType)
    let emailTypeData = { "emailType": emailType }
    await axios.put(`http://localhost:8888/actions/Sold/${email}`, emailTypeData, () => {
      this.gettingData()
    })
  }

  componentWillMount = () => {
    this.gettingData()
  }
  updateClientsNameOrCountry = async (email, newClientData) => {
    console.log(email, newClientData)
    await axios.put(`http://localhost:8888/actions/nameAndCountry/${email}`, newClientData)
    this.gettingData()
  }


  dataFilter = async (input = null, sort) => {

    if (sort === "name" || sort === "owner" || sort === "country") {

      let results = this.state.data.filter(f => f[sort].toLowerCase().includes(input))
      await this.setState({ users: results })
    }
    else if (sort === "emailType") {

      let results = this.props.data.filter(f => f[sort] !== null && input ? f[sort] === input.toUpperCase() : input === "" ? f[sort] === null : null)

      await this.setState({ users: results })
    }
    else if (sort === "true" || sort === "false") {
      if (sort === "true") {
        let results = this.state.data.filter(f => f.sold === true)
        await this.setState({ users: results })
      }
      else {
        let results = this.state.data.filter(f => f.sold === false)
        await this.setState({ users: results })
      }
    }
    else if (sort === "firstContact") {
      let results = this.state.data.filter(f => f[sort].includes(input))
      await this.setState({ users: results })
    }

  }



  render() {

    return <Router >
      <div className="nav-bar">
        <Link to="/clients"><span className="nav">Client</span></Link>
        <Link to="/actions"><span className="nav">Actions</span></Link>
        <Link to="/analytics"><span className="nav">Analytics</span></Link>
      </div>

      <div className="Clients">
        <Route path="/clients" exact render={() => <Clients fn={this.dataFilter} gettingData={this.gettingData} data={this.state.users} updateName={this.updateClientsNameOrCountry} />} />
        <Route pah="/actions" exact render={() => <Actions fn={this.addClientFromActionsToDb} gettingData={this.gettingData} data={this.state.users}
          update={this.updateClientOwnerFromActionsToDb} updateSold={this.makeClientSold} />} />
        <Route path="/analytics" exact render={() => <Analytics data={this.state.users} />} />
      </div>
      <div>
        {/* <Route path="/actions" exact render={} />  */}
      </div>
    </Router>

  }
}

export default App  
