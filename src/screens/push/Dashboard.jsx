import React, { useState, useEffect } from "react";
import { Routes, Route, Outlet } from "react-router-dom"; // Include Outlet for nested routing
import Navigation from "../navigation/Navigation"; // Import Navigation component
import ProfilePage from './ProfilePage'; // Import ProfilePage component

const Dashboard = () => {
    const [employeeNumber, setEmployeeNumber] = useState(null);

    // Fetch the employee number from localStorage or API
    useEffect(() => {
        const storedEmployeeNumber = localStorage.getItem("employee_number");
        if (storedEmployeeNumber) {
            setEmployeeNumber(storedEmployeeNumber);
        } else {
            console.error("Employee number not found in localStorage.");
        }
    }, []);

    return (
        <div>
            <Navigation />
            <div className="main-content">
                {/* Display Employee Number */}
                <div className="employee-info">
                    <h3>Employee Number: {employeeNumber ? employeeNumber : "Loading..."}</h3>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
