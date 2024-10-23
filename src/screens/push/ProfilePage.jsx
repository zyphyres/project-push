import React, { useState, useEffect } from "react";
import '../push/styles.css';
import LoaderPush from "../../assets/loader.gif"
import MasterLayout from "./layout/MasterLayout";
import axios from 'axios';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';


// const ProfilePage = () => {


//   return (
//     <>
//     <MasterLayout title = 'Profile'>
//         <h1>Profile Content</h1>
//     </MasterLayout>

//     </>
//   );
// }

// export default ProfilePage;

const ProfilePage = () => {
    const [profileData, setProfileData] = useState(null);
    const employeeNumber = localStorage.getItem("employee_number"); // Assuming employee number is stored in localStorage.

    // Fetch user profile data on component mount
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get(`http://bac-dev08:3000/api/profile/${employeeNumber}`, {
                    withCredentials: true,  // Ensures credentials are included with the request
                });
                setProfileData(response.data);
            } catch (error) {
                console.error("Error fetching profile data:", error);
            }
        };

        if (employeeNumber) {
            fetchProfile();
        } else {
            console.error("Employee number not found.");
        }
    }, [employeeNumber]);

    if (!profileData) {
        return (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
            <img src={LoaderPush} style={{ width: '300px', height: '180px' }} />
          </div>
        );
      }
      
      

    return (
        <>
            <MasterLayout title='Profile'>

                <MDBContainer>
                    <MDBRow>
                        <MDBCol>
                            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                {/* <MDBBreadcrumbItem>
                                    <a href='#'>Home</a>
                                </MDBBreadcrumbItem>
                                <MDBBreadcrumbItem>
                                    <a href="#">User</a>
                                </MDBBreadcrumbItem> */}
                                <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
                            </MDBBreadcrumb>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <div className="d-flex justify-content-center mb-3">
                                        <MDBCardImage
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                            alt="avatar"
                                            className="rounded-circle"
                                            style={{ width: '150px' }}
                                            fluid
                                        />
                                    </div>
                                    <p className="text-muted mb-1">{profileData.data[0].position}</p>
                                    <p className="text-muted mb-4">{profileData.data[0].empNumber}</p>
                                </MDBCardBody>
                            </MDBCard>


                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>Wave Number</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].waveNumber}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>Department</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].department}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>Tax Status</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].TaxStatusName}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>TIN</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].tin}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>SSS</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].sss}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>PHILHEALTH</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].philhealth}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="5">
                                            <MDBCardText>HDMF</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="6">
                                            <MDBCardText className="text-muted">{profileData.data[0].hdmf}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Full Name</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].firstName} {profileData.data[0].middleName} {profileData.data[0].lastName} </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Gender</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">
                                                {profileData.data[0].gender === 0 ? 'Male' : 'Female'}
                                            </MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Birthday</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].birthDate}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Civil Status</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].civil_status_name}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Phone</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].contactNumber}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Mobile</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].contactNumber2}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Address</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].oldAddress}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Street</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].street}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Subdivision</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].subd}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Sitio</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].sitio}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Brgy</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].brgy}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>City</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].city}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                    <hr />
                                    <MDBRow>
                                        <MDBCol sm="3">
                                            <MDBCardText>Province</MDBCardText>
                                        </MDBCol>
                                        <MDBCol sm="9">
                                            <MDBCardText className="text-muted">{profileData.data[0].province}</MDBCardText>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>


            </MasterLayout>

        </>
    );
};

export default ProfilePage;
