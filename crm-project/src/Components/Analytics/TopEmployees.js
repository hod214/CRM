import React, { PureComponent } from 'react';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
export default class TopEmployees extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/30763kr7/';

  bestEmployeesFinder = () => {
    let EmployeesWithSales = {}
    this.props.data.map(d => EmployeesWithSales[d.owner] ? null : EmployeesWithSales[d.owner] = 0)
    this.props.data.map(d => EmployeesWithSales[d.owner]++)
    let employeeNameArr = Object.keys(EmployeesWithSales)
    let salesArr = Object.values(EmployeesWithSales)
    let bestEmployees = []
    for (let i = 0; i < employeeNameArr.length; i++) {
        bestEmployees.push({ name: employeeNameArr[i], sales: salesArr[i] })}
    console.log(bestEmployees)

    bestEmployees.sort((a, b) => {
        return(a.sales > b.sales)? -1: 1
    })
return bestEmployees.slice(0,3)
}

  render() {
    return (
      <BarChart
        width={500}
        height={300}
        data={this.bestEmployeesFinder()}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="sales" fill="#8884d8" />
      </BarChart>
    );
  }
}
