import { VStack } from '@chakra-ui/react';
import React from 'react';
import BookPage from './BookPage';

const Book = () => {
  const totalPages = 3;

  return (
    <VStack>
        {totalPages > 0 && Array.from({ length: totalPages }).map((_, index) => (
            <BookPage key={index} pageNumber={index + 1} />
        ))}
    </VStack>
  );
};

export default Book;
