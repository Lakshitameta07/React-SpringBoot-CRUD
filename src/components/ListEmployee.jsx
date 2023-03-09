import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployee extends Component {

  constructor(props)
  {
    super(props)

    this.state = {
      employees:[]
    }
  }

  componentDidMount(){
    EmployeeService.getEmployees().then((res) => {
      this.setState({employees: res.data})
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <h2 className="text-center">Employees List</h2>
        <div className="row">
          <table className="table table-striped table-bordered table-secondary">
            <thead>
              <tr className="text-center">
                <th> First Name </th>
                <th> Last Name </th>
                <th> Email Id </th>
                <th> Actions </th>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.employees.map(
                    employee => 
                    <tr key = {employee.id}>
                      <td> {employee.firstName} </td>
                      <td> {employee.lastName} </td>
                      <td> {employee.emailId}</td>       
                    </tr>
                  )
                }
            </tbody>
          </table>
        </div>   
      </div>
    );
  }
}
export default ListEmployee;
