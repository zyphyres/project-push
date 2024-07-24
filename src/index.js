import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { ChakraProvider } from '@chakra-ui/react';
import { ZoomTheme } from './utils';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
const { theme } = ZoomTheme();
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
        <App />
    </ChakraProvider>
  </React.StrictMode>
);

