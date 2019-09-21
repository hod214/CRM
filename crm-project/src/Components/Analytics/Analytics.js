import React, { Component } from 'react';
import Bar from './Bar'
import Badges from './Badges'
import TopEmployees from './TopEmployees'

class Analytics extends Component {
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return <div className="analytics">

            <div>
                <Badges data={this.props.data} />
            </div>
            <div>
                <Bar data={this.props.data} />
                <TopEmployees data={this.props.data} />
            </div>

        </div>
    }
}
export default Analytics