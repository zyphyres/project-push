import React, { useState, useRef } from "react";
import axios from "axios";
import { FaUserLarge, FaLock } from "react-icons/fa6";
import {
  useToast,
  Box,
  Text,
  Image,
  Center,
  Icon,
  Input,
  Button,
  FormControl,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

import { MainLogo, PushLogo } from "../../assets";
import { LoginBoxShadow, ResponsiveTool } from "../../utils";

const LandingPage = () => {
  const [data, setData] = useState({
    ntlogin: "",
    password: "",
  });
  const toast = useToast()
  const navigate = useNavigate();
  // Initialize useNavigate for redirection
  const { headerH, logoW, titleW, transitionStyles } =
    ResponsiveTool();
  const { shadowOne, shadowTwo } = LoginBoxShadow();
  const theme = useTheme();
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const csrfResponse = await axios.get(
        "http://bac-dev08:3000/sanctum/csrf-cookie",
        { withCredentials: true }
      );
      const csrfToken = csrfResponse.data.csrf_token;
  
      const response = await axios.post(
        "http://bac-dev08:3000/api/login",
        data,
        {
          withCredentials: true,
          headers: {
            "X-CSRF-TOKEN": csrfToken,
          },
        }
      );
      
    
      // If login is successful, store session data in localStorage
      if (response.status === 200) {
        // Store login status
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("ntlogin", response.data.data[0].ntlogin);  // Store ntlogin if needed
        navigate("/dashboard"); // Redirect to the dashboard
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      toast({
        position: 'bottom-right',
        title: 'Login Failed',
        description: "NTLogin or Password is incorrect!",
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.error("Error during login", error);
    }
  };

  return (
    <Box h="100vh" w="100vw" display="flex" flexDirection="column">
      <Box h={headerH} maxH="70px" display="flex" style={transitionStyles}>
        <Box
          p={2}
          ml="20px"
          h={headerH}
          w={logoW}
          style={transitionStyles}
          display="flex"
          alignItems="center"
          bg="transparent"
          transform={`scale(${theme.zoom.lg})`}
        >
          <Image src={MainLogo} alt="Main Logo" objectFit="cover" />
        </Box>

        <Box
          p={3}
          marginRight="15px"
          h={headerH}
          w={titleW}
          style={transitionStyles}
          display="flex"
          alignItems="center"
          bg="transparent"
          transform={`scale(${theme.zoom.lg})`}
        >
          <Image src={PushLogo} alt="Title Logo" objectFit="cover" />
        </Box>
      </Box>

      <Box
        h="100vh"
        w="100vw"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        bgGradient={[
          "linear(to-t, #056a94, #ffffff, #ffffff)",
          "linear(to-b, #ffffff, #ffffff, #056a94)",
        ]}
      >
        <Center
          h="90%"
          w="50%"
          position="relative"
          bg="#ffffff"
          borderRadius="15px"
          style={{ ...transitionStyles, ...shadowOne }}
          opacity="30%"
          zIndex="0"
        />

        <Center
          h="90%"
          w="100%"
          bg="transparent"
          position="absolute"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
          zIndex="1"
        >
          <Box
            h={{ base: "90%", md: "100%", lg: "100%" }}
            w="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly"
            overflowY="auto"
          >
            <Box
              h={{ base: "30px", md: "80px", lg: "90px" }}
              w={{ base: "30px", md: "80px", lg: "90px" }}
              style={{ ...transitionStyles, ...shadowTwo }}
              borderRadius="50%"
              bg="#ffffff"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaUserLarge} boxSize="50%" color="#056a94" />
            </Box>

            <Box
              h="1px"
              w="50%"
              mt="-35px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="30px" fontWeight="bold" color="#056a94">
                Login
              </Text>
            </Box>

            <Box
              h={{ base: "50%", md: "30%", lg: "30%" }}
              w={{ base: "70%", md: "70%", lg: "50%" }}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <form ref={formRef} onSubmit={submitForm}>
                <FormControl w="300px" mt="-30px">
                  <InputGroup mb="10px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <Icon as={FaUserLarge} boxSize="50%" color="#056a94" />
                      }
                    />
                    <Input
                      type="text"
                      name="ntlogin"
                      placeholder="ntlogin"
                      value={data.ntlogin}
                      onChange={handleChange}
                      pl="40px"
                      variant="filled"
                      borderRadius="20px"
                      style={shadowTwo}
                      backgroundColor="#ffffff"
                      sx={{
                        "&:focus": {
                          bg: "blue.100",
                        },
                      }}
                    />
                  </InputGroup>

                  <InputGroup mb="10px">
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <Icon as={FaLock} boxSize="50%" color="#056a94" />
                      }
                    />
                    <Input
                      type="password"
                      name="password"
                      placeholder="password"
                      value={data.password}
                      onChange={handleChange}
                      pl="40px"
                      variant="filled"
                      borderRadius="20px"
                      style={shadowTwo}
                      backgroundColor="#ffffff"
                      sx={{
                        "&:focus": {
                          bg: "blue.100",
                        },
                      }}
                    />
                  </InputGroup>
                </FormControl>
                <Center marginTop={10}>
                  <Button
                    type="submit"
                    bg="#056a94"
                    h="2.5em"
                    width="70%"
                    mt="20px"
                    color="#ffffff"
                    fontSize="16px"
                    fontWeight="bold"
                    letterSpacing="1px"
                    borderRadius="20px"
                    sx={{
                      "&:hover": {
                        bg: "blue.100",
                        color: "#056a94",
                      },
                    }}
                  >
                    LOGIN
                  </Button>
                </Center>
              </form>
            </Box>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default LandingPage;
