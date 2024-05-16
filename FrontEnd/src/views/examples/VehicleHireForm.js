// src/VehicleHireForm.js

import React, { useState } from 'react';
import axios from 'axios';
import Nav from 'components/Navbars/RentNav';
import { Button, Card, Form, Input, Container, Row, Col,Label} from "reactstrap";
import 'assets/css/VehicleForm.css';

const vehicleOptions = {
    Bicycle: ['Mountain'],
    Motorcycle: ['Scooty', 'Pulser', 'CT 100', 'Discover'],
    Car: ['BMW', 'Alto', 'Wagon-R', 'Maruti Suzuki']
};

const VehicleHireForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        type: '',
        capacity: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleVehicleNameChange = (e) => {
        const vehicleName = e.target.value;
        setFormData({
            ...formData,
            name: vehicleName,
            type: '' // Reset vehicle type when vehicle name changes
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Submit the form data
            await axios.post('http://localhost:5000/vehicles', formData);
            setIsSubmitted(true);
            alert('Vehicle reserved successfully!');
        } catch (error) {
            console.error('Error reserving vehicle:', error);
            alert('Failed to reserve vehicle. Please try again.');
        }
    };

    return (
        <> 
        <Nav/>
        <div
        className="page-header"
        style={{
           backgroundImage: "url(" + require("assets/img/ln2.jpg") + ")",
        }}>
            {isSubmitted ? (
                <div className="success-message">
                    You reserved your vehicle successfully!
                </div>
            ) : (
                <form onSubmit={handleSubmit}  className='forms'>
                    <div >
                        <label>
                             Vehicle Name:
                            <select
                                name="name"
                                value={formData.name}
                                onChange={handleVehicleNameChange}
                                required
                            >
                                <option value="">Select Vehicle</option>
                                {Object.keys(vehicleOptions).map((name) => (
                                    <option key={name} value={name}>{name}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Vehicle Type:
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                required
                                disabled={!formData.name}
                            >
                                <option value="">Select Type</option>
                                {formData.name && vehicleOptions[formData.name].map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div>
                        <label>
                            Capacity:
                            <input
                                type="number"
                                name="capacity"
                                value={formData.capacity}
                                onChange={handleChange}
                                required
                            />
                        </label>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        
        </div>
        </>
    );
};

export default VehicleHireForm;
