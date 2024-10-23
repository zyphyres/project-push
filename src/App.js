import React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Dashboard, ProtectedRoute } from "../src/screens"; // Ensure ProfilePage is imported
import MainRoutes from "./screens/route/MainRoutes";

function App() {
  return (
    
      <Container
        m={0}
        p={0}
        h="100vh"
        w="100vw"
        maxHeight="100vh"
        maxWidth="100vw"
      >
      <MainRoutes />
      </Container>
   
    
  );
}

export default App;
