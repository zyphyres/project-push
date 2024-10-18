import React, { useState, useEffect } from "react";
import '../push/styles.css';


const ProfilePage = () => {

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
            <div className="main-content">
                {/* Display Employee Number */}
                <div className="employee-info">
                    <h3>Employee Number: {employeeNumber ? employeeNumber : "Loading..."}</h3>
                </div>
            </div>
        </div>
  );
}

export default ProfilePage;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProfilePage = () => {
//     const [profileData, setProfileData] = useState(null);
//     const employeeNumber = localStorage.getItem("employee_number"); // Assuming employee number is stored in localStorage.

//     // Fetch user profile data on component mount
//     useEffect(() => {
//         const fetchProfile = async () => {
//             try {
//                 const response = await axios.get(`http://bac-dev08:3000/api/profile/${employeeNumber}`, {
//                     withCredentials: true,  // Ensures credentials are included with the request
//                 });
//                 setProfileData(response.data);
//             } catch (error) {
//                 console.error("Error fetching profile data:", error);
//             }
//         };

//         if (employeeNumber) {
//             fetchProfile();
//         } else {
//             console.error("Employee number not found.");
//         }
//     }, [employeeNumber]);

//     if (!profileData) return <p>Loading...</p>; // Show loading if data is still being fetched

//     return (
//         <div className="profile-container">
//             <h2>My Profile</h2>
//             <div className="profile-info">
//                 <div><strong>Name:</strong> {profileData.name}</div>
//                 <div><strong>Email:</strong> {profileData.email}</div>
//                 <div><strong>Role:</strong> {profileData.role}</div>
//                 {/* Add more fields as required */}
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;
