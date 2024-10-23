
import React, { useState, useEffect } from "react";
import Navigation from "../../navigation/Navigation"; // Import Navigation component
import '../styles.css';

const MasterLayout = ({ children }) => {
    const [name, setEmployeeName] = useState(null);

    // Fetch the employee number from localStorage or API
    useEffect(() => {
        const name = localStorage.getItem("name");
        if (name) {
            setEmployeeName(name);
        } else {
            console.error("Employee Name not found in localStorage.");
        }
    }, []);
  return (
    <>

        <div>
            <div className="main-content">
                {/* Display Employee Number */}
                <Navigation />
                <div className="Main-wrapper">
                    <div className="employee-info">
                        <h4>Welcome,</h4>
                        <h3>{name ? name : "Loading..."}</h3>
                    </div>
                    <div className='content-Wrapper'>
                        
                        {children}

                    </div>
                </div>
            </div>
        </div>
    
    </>
  )
}

export default MasterLayout