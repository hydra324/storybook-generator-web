import React from 'react';
// import Book from './Book';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme';
import Book from './stories/Book';

function App() { 
  return (
    <ChakraProvider theme={theme}>
      {/* <Book /> */}
      <Book />
    </ChakraProvider>
  );
}

export default App;