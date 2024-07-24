import React from "react";
import { Container } from "@chakra-ui/react";

import { Landing } from './screens'

function App() {
  return (
    <Container
      m={0}
      p={0}
      h='100vh'
      w='100vw'
      maxHeight='100vh'
      maxWidth='100vw'
    >
        <Landing />
    </Container>
  );
}

export default App;
