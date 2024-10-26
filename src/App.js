import React from "react";
import { Container } from "@chakra-ui/react";
import MainRoutes from "./screens/route/MainRoutes";

function App() {
  return (
    
      <Container
        m={0}
        p={0}
        h="100vh"
        w="100%"
        maxHeight="100%"
        maxWidth="100vw"
      >
      <MainRoutes />
      </Container>
   
    
  );
}

export default App;
