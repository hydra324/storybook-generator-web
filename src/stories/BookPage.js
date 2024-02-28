import React from 'react';
import { VStack } from '@chakra-ui/react';
import EmblaCarousel from './EmblaCarousel';

const BookPage = () => {
  const OPTIONS = {}
  const SLIDES = [
    'https://img.freepik.com/free-vector/kids-discussing-with-book-forest_1308-30690.jpg?size=626&ext=jpg',
    'https://img.freepik.com/premium-vector/nature-outdoor-with-cute-kids-books-letter-cubes_679557-1977.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
    'https://img.freepik.com/free-vector/children-wild-animals-field_1308-31671.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
    
  ]
  return (
    <VStack w="50vw" h="50vh" m="auto">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </VStack>
  );
};

BookPage.defaultProps = {

};

export default BookPage;