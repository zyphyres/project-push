import { extendTheme } from '@chakra-ui/react';

export const zoomTheme = () => {
const theme = extendTheme({
  zoom: {
    sm: '80%', // Small zoom level
    md: '100%', // Medium zoom level (default)
    lg: '120%', // Large zoom level
    xl: '150%', // Extra large zoom level
  },
});

return { theme };
}
