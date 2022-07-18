import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import EmployeeService from './EmployeeService';
import './Book.css'

const AddEmployeeComponent = () => {
    const [firstName, setFirstName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [destination, setDestination] = useState('')
    const [duration, setDuration] = useState('')
    const [startdate, setStartdate] = useState('')
    const history = useNavigate();
    const { id } = useParams();


    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, emailId, mobileNumber,destination, duration, startdate }

        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                history.push('/employees')
            }).catch(error => {
                console.log(error)
            })

        } else {
            EmployeeService.createEmployee(employee).then((response) => {

                console.log(response.data)

                history.push('/employees');

            }).catch(error => {
                console.log(error)
            })
            alert('Submitted Successfully.')
        }

    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setEmailId(response.data.emailId)
            setEmailId(response.data.mobileNumber)
            setDestination(response.data.destination)
            setDuration(response.data.duration)
            setStartdate(response.data.startdate)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    const title = () => {

        if (id) {
            return <h2 className="text-center">Update Bookings</h2>
        } else {
            return <h2 className="text-center">Add Bookings</h2>
        }
    }
    return (
        <div>
            <div className="container2">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {title()}
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Full Name </label>
                                    <input type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        className="form-control"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    >
                                    </input>

                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Email Id </label>
                                    <input type="email"
                                        placeholder="Enter emailId"
                                        name="emailId"
                                        className="form-control"
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Mobile Number </label>
                                    <input type="text"
                                        placeholder="Enter mobileNumber"
                                        name="mobileNumber"
                                        className="form-control"
                                        value={mobileNumber}
                                        onChange={(e) => setMobileNumber(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Destination </label>
                                    {/* <input type="text"
                                        placeholder="Enter Destination"
                                        name="destination"
                                        className="form-control" */}
                                    {/* value={destination}
                                        onChange={(e) => setDestination(e.target.value)}
                                    > */}
                                    <select className='form-control' onChange={(e) => setDestination(e.target.value)}>
                                        <option value="Goa">Goa</option>
                                        <option value="Havelock">Havelock</option>
                                        <option value="Marari">Marari</option>
                                        <option value="Vizag">Vizag</option>
                                        <option value="Juhu">Juhu</option>
                                        <option value="Puri">Puri</option>
                                        <option value="Gokarna">Gokarna</option>
                                        <option value="Lakshadweep">Lakshadweep</option>
                                        <option value="Digha">Digha</option>
                                    </select>
                                    {/* </input> */}
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Duration </label>
                                    <input type="number"
                                        placeholder="Enter Duration"
                                        name="duration"
                                        className="form-control"
                                        value={duration}
                                        onChange={(e) => setDuration(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <div className="form-group mb-2" >
                                    <label className="form-label"> Start Date </label>
                                    <input type="date"
                                        placeholder="Enter Date"
                                        name="startdate"
                                        className="startdate form-control"
                                        value={startdate}
                                        onChange={(e) => setStartdate(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateEmployee(e)}  >Submit </button>
                                <Link to="/" className="btn btn-danger"> Cancel </Link>
                            </form>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default AddEmployeeComponent
