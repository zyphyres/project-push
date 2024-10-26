import React, { useState, useEffect } from "react";
import axios from 'axios';
import MasterLayout from "./layout/MasterLayout";
import LoaderPush from "../../assets/loader.gif";
import { Swiper, SwiperSlide } from 'swiper/react';
import '../push/css/announcement.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import Accordion from 'react-bootstrap/Accordion';

const Announcement = () => {
  const [pinnedData, setPinnedData] = useState([]);
  const [announcementData, setAnnouncementData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const employeeNumber = localStorage.getItem("employee_number");

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get('http://bac-dev08:3000/api/GetAnn', {
          withCredentials: true,
        });

        // Check if response structure is valid
        if (response.data && Array.isArray(response.data.pinned)) {
          setPinnedData(response.data.pinned); // Set the pinned data if valid
        }
        else {
          setPinnedData([]); // Default to empty array if structure is invalid
        }

        // Check if response structure is valid
        if (response.data && Array.isArray(response.data.announcements)) {
          setAnnouncementData(response.data.announcements); // Set the pinned data if valid
        }
        else {
          setAnnouncementData([]); // Default to empty array if structure is invalid
        }


        setLoading(false);
      } catch (error) {
        console.error("Error fetching announcements:", error);
        setError("Failed to load announcements.");
        setLoading(false);
      }
    };

    if (employeeNumber) {
      fetchAnnouncements();
    } else {
      setError("Employee number not found.");
      setLoading(false);
    }
  }, [employeeNumber]);

  // Loading state
  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100vw', height: '100vh' }}>
        <img src={LoaderPush} style={{ width: '300px', height: '180px' }} />
      </div>
    );
  }

  // Error state
  if (error) {
    return <div>{error}</div>;
  }

  // Limit to display only the first 6 slides
  const limitedPinnedData = pinnedData.slice(0, 10);
  const limitedAnnouncementData = announcementData.slice(0, 15);
  return (
    <MasterLayout title='Profile'>
      
        {limitedPinnedData.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={10}
            autoplay={{
              delay: 2000, // Autoplay delay in milliseconds
              disableOnInteraction: false, // Autoplay continues after user interactions
            }}
            slidesPerView={1}
            className="my-swiper"
            navigation
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
          >
            {limitedPinnedData.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slide">
                  <div dangerouslySetInnerHTML={{ __html: slide.message }} />
                  <div className="slide-title">{slide.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <p>No announcements available.</p>
        )}

        <div style={{ marginTop: "10px" }}></div>
        <Accordion>
          <Accordion.Item >
            <Accordion.Header>Other Announcements</Accordion.Header>
            <Accordion.Body >
              <div className="announcement-page" >
                {limitedAnnouncementData.length > 0 ? (
                  limitedAnnouncementData.map((data, index) => (
                    <div className="my-ann" key={index}>
                      <div dangerouslySetInnerHTML={{ __html: data.message }} />
                      <div className="announcement-group">
                      <div className="announcement-title">{data.name}</div>
                      <div className="announcement-title">{data.title}</div>
                      <div className="announcement-title">{data.created_at}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No additional announcements available.</p>
                )}
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </MasterLayout>
  );
};

export default Announcement;
