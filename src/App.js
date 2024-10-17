import React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Dashboard } from "./screens";

function App() {
  return (
    <Router>
      <Container
        m={0}
        p={0}
        h="100vh"
        w="100vw"
        maxHeight="100vh"
        maxWidth="100vw"
      >
        <Routes>
         <Route path="/" element={<Landing />} />
         <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
