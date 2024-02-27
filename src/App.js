import React from 'react';
import Book from './Book';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Book />
    </ChakraProvider>
  );
}

export default App;