import React from 'react';
import Book from './Book';
import { ChakraProvider } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Book />
    </ChakraProvider>
  );
}

export default App;