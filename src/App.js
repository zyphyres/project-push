import React from "react";
import { Container } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Landing, Dashboard, ProtectedRoute } from "./screens"; // Ensure ProfilePage is imported

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
          {/* Wrap dashboard route in ProtectedRoute */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          >  
          </Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
