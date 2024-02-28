import React from 'react';
import Book from './Book';
import { ChakraProvider } from "@chakra-ui/react"
import theme from './theme';
import Page from './stories/Page';

function App() { 
  return (
    <ChakraProvider theme={theme}>
      {/* <Book /> */}
        <Page pageNumber={1} zIndex={1} navigateNext={() => {}} navigatePrev={() => {}}/>
    </ChakraProvider>
  );
}

export default App;