import { VStack, IconButton, Icon} from '@chakra-ui/react';
import {React, useRef, useState } from 'react';
import BookPage from './BookPage';
import {AIImageIcon} from './AIImageIcon';
import theme from '../theme';

const Book = () => {
  const totalPages = 3;

  const [currentPage, setCurrentPage] = useState(1);

  

  return (
      <VStack>
          {totalPages > 0 && Array.from({ length: totalPages }).map((_, index) => (
              <BookPage key={index} pageNumber={index + 1} />
          ))}
      </VStack>
    
    
  );
};

export default Book;
