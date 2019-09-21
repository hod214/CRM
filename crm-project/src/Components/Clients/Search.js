import React, { Component } from 'react';

class Search extends Component {
    constructor() {
        super()
        this.state = {
            search: "",
            sort: "all"
        }
    }
    componentDidMount = async () => {
        this.props.fn(this.state.search, this.state.sort)
    }

    searchInput = async (e) => {
        await this.setState({ search: e.target.value })
        this.props.fn(this.state.search, this.state.sort)

    }

    sortType = async (e) => {
        await this.setState({ sort: e.target.value })
        this.props.fn(this.state.search, this.state.sort)
    }


    render() {
        return <div>
            <input type="text" onChange={this.searchInput} value={this.state.search} />
            <select onChange={this.sortType} >
                <option value="all">choose</option>
                <option value="name">name</option>
                <option value="emailType">email type</option>
                <option value="true">sold</option>
                <option value="false">not sold</option>
                <option value="owner">owner</option>
                <option value="country"> country</option>
                <option value="firstContact">date</option>

            </select>
        </div>
    }
}

export default Search