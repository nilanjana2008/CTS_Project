import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import './ListEmployeeComponent.css'

const ListEmployeeComponent = () => {
    const [employees, setEmployees] = useState([])
    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployees(response.data)
            console.log(response.data);
        }).catch(error => {
            console.log(error);
        })
    }
    const deleteEmployee = (employeeId) => {
        EmployeeService.deleteEmployee(employeeId).then((response) => {
            getAllEmployees();

        }).catch(error => {
            console.log(error);
        })

    }


    return (
        <div className="container3">
            <h2 className="text-center"> Bookings Manager </h2>
            <Link to="/add-employee" className="btn btn-primary mb-2" > Add Bookings </Link>
            <table className="table table-bordered table-striped">
                <thead>
                    <th> Booking Id </th>
                    <th> Full Name </th>
                    <th>  Email Id </th>
                    <th> Mobile Number </th>
                    <th> Destination </th>
                    <th> Duration(Days) </th>
                    <th> Start Date </th>
                    <th> Actions </th>

                </thead>
                <tbody>
                    {
                        employees.map(
                            employee =>
                                <tr key={employee.id}>
                                    <td> {employee.id} </td>
                                    <td> {employee.firstName} </td>
                                    <td>{employee.emailId}</td>
                                    <td>{employee.mobileNumber}</td>
                                    <td>{employee.destination}</td>
                                    <td>{employee.duration}</td>
                                    <td>{employee.startdate}</td>
                                   
                                    <td>
                                        <Link className="btn btn-info" to={`/edit-employee/${employee.id}`} >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteEmployee(employee.id)}
                                            style={{ marginLeft: "10px" }}> Delete</button>
                                    </td>
                                </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    )
}

export default ListEmployeeComponent
