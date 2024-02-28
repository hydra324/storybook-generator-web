import React from 'react';
import { VStack } from '@chakra-ui/react';
import EmblaCarousel from './EmblaCarousel';

const BookPage = () => {
  const OPTIONS = {}
  const SLIDE_COUNT = 5
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  return (
    <VStack w="50vw" h="50vh" m="auto">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </VStack>
  );
};

BookPage.defaultProps = {

};

export default BookPage;
