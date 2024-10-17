import React, { useState, useRef } from 'react';
import axios from 'axios';
import { FaUserLarge } from "react-icons/fa6";
import { Box, Text, Image, Center, Icon, Input, Button, FormControl } from '@chakra-ui/react';
import { useTheme } from '@emotion/react';

import { MainLogo, PushLogo } from '../../assets'
import { LoginBoxShadow, ResponsiveTool } from '../../utils';




const LandingPage = () => 
{
  const [data, setData] = useState({
      ntlogin: 'jggerial',
      password: '' 
    });

  const { headerH, logoW, titleW, cWidth, cHeight, transitionStyles } = ResponsiveTool();
  const { shadowOne, shadowTwo } = LoginBoxShadow();
  const theme = useTheme();
  const formRef = useRef(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const submitForm = async (event) => {
    event.preventDefault();
    const csrfResponse = await axios.get('http://bac-dev08:3000/sanctum/csrf-cookie', { withCredentials: true });
    const csrfToken = csrfResponse.data.csrf_token;

    const response = await axios.post(
      'http://bac-dev08:3000/api/login',
      data,
      {
        withCredentials: true, // Include cookies in the request
        withXSRFToken: true,
        headers: {
          'Access-Control-Allow-Credentials': true,
          'X-CSRF-TOKEN': csrfToken, // Include CSRF token in a custom header
          // 'Authorization': 'Bearer your_access_token' // Include authorization token
        },
        // xsrfCookieName: 'XSRF-TOKEN', // Specify the name of the CSRF token cookie
        // xsrfHeaderName: 'X-XSRF-TOKEN', // Specify the name of the CSRF token header
      }
  );
  console.log(response.data);

    // // console.log(data);
    //   axios.get('http://bac-dev08:3000/login')
      
    //     .then(response => {
    //       console.log(response.data);
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
  };

    return  ( 
      <Box h='100vh' w='100vw' display='flex' flexDirection='column'>
        <Box
          h={headerH}
          maxH='70px'
          display='flex'
          justifyContent='space-between'
          style={transitionStyles}         
        >
          <Box 
            p={3} 
            h={headerH} 
            w={logoW} 
            style={transitionStyles} 
            display='flex' 
            alignItems='center' 
            bg='transparent' 
            transform={`scale(${theme.zoom.md})`} 
          >
              <Image src={MainLogo} alt='Main Logo' objectFit='cover' />           
          </Box>  

          <Box  
            p={3}
            marginRight='15px' 
            h={headerH} 
            w={titleW} 
            style={transitionStyles} 
            display='flex' 
            alignItems='center' 
            bg='transparent'  
            transform={`scale(${theme.zoom.lg})`}
          >
              <Image src={PushLogo} alt='Title Logo' objectFit='cover' />           
          </Box> 
        </Box>

        <Box 
            h='100vh'
            w='100vw'
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="relative"
            bgGradient={[
                          'linear(to-t, #056a94, #ffffff, #ffffff)',
                          'linear(to-b, #ffffff, #ffffff, #056a94)'
                        ]}
        > 
        
            <Center 
                h='90%' 
                w={cWidth}
                position='relative'  
                bg='#ffffff'
                borderRadius='15px'
                style={{...transitionStyles, ...shadowOne}}
                opacity='30%'
                zIndex='0'
            />
           
            <Center
                h='95%'
                w={cWidth} 
                bg='transparent'  
                position='absolute' 
                display='flex'
                flexDirection='column'
                alignItems='center'
                justifyContent='space-evenly' 
                zIndex='1'
            >
              <Box
              h={{ base: '90%', md: '100%', lg: '100%' }}
              w='100%'
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='space-evenly'
              overflowY="auto"
              >
                <Box
                h={{ base: '70px', md: '100px', lg: '150px' }}
                w={{ base: '70px', md: '100px', lg: '150px' }}                 
                style={{...transitionStyles, ...shadowTwo}}
                borderRadius='50%'
                bg='#ffffff'
                display='flex'
                alignItems='center'
                justifyContent='center'
                >
                  <Icon as={FaUserLarge} boxSize='50%' color='#056a94' />
                </Box> 

                <Box 
                    h='30px'                    
                    w='50%'
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                  >
                    <Text fontSize='30px' fontWeight='bold' color='#056a94'>V1 Kent Denmark Y. Cabagua</Text>
                </Box>

                <Box
                h={{ base: '50%', md: '30%', lg: '30%' }}
                w={{ base: '70%', md: '70%', lg: '50%' }} 
                display='flex'
                flexDirection='column'
                alignItems='center'
                >                    
              <form ref={formRef} onSubmit={submitForm}>
                <FormControl w='30vw'>
                <Input 
                  type='text' 
                  name='ntlogin'
                  value={data.ntlogin} 
                  onChange={handleChange}  
                  pl={10}                  
                  variant='filled'
                  borderRadius='20px'
                  style={shadowTwo}
                  backgroundColor='#ffffff'
                  sx={{
                    '&:focus': {
                      bg: 'blue.100', 
                    }}}
                  />   

                <Input 
                  type='password' 
                  name='password'
                  value={data.password} 
                  onChange={handleChange}  
                  pl={10}                  
                  variant='filled'
                  borderRadius='20px'
                  style={shadowTwo}
                  backgroundColor='#ffffff'
                  sx={{
                    '&:focus': {
                      bg: 'blue.100', 
                    }}}
                  />    
                </FormControl>
                <Center
                marginTop={10}
                >  
                <Button 
                  type='submit'
                  bg='#056a94'
                  h='2.5em'
                  width='70%'
                  color='#ffffff' 
                  fontSize='16px'
                  fontWeight='bold'
                  letterSpacing='1px'
                  borderRadius='20px'
                  sx={{
                    '&:hover': {
                      bg: 'blue.100', 
                      color: '#056a94'
                    }}}
                  >
                    TAEE
                  </Button>
                </Center>   
              </form> 

                </Box>  
              </Box>                          
            </Center> 
             
        </Box>         
        
      </Box>  
);
}

export default LandingPage;