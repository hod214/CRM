import React, { PureComponent } from 'react';
import {BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,} from 'recharts';

export default class Example extends PureComponent {
  findRelevantData =()=> {
    let countries2 = {}
    let countryData = []
    this.props.data.filter(m => m.sold).map(m => countries2[m.country] ? null : countries2[m.country] = 0)
    this.props.data.filter(m => m.sold).map(m => countries2[m.country]++)
    for (let i in countries2) {
        countryData.push({ name: i, sales: countries2[i] })
  }
return countryData
}
    
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  render() {
    return (
      <BarChart
        width={700}
        height={300}
        data={this.findRelevantData()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray=" 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#AA84d8" />
      </BarChart>
    );
  }
}

