import { VStack, IconButton, Icon} from '@chakra-ui/react';
import {React, useRef, useState } from 'react';
import BookPage from './BookPage';
import {AIImageIcon} from './AIImageIcon';
import theme from '../theme';

const Book = () => {
  const totalPages = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const getImages = () => {
    // get current focused page
    // get images for that page
    // set images for that page
  }

  return (
    
      <VStack>
          {totalPages > 0 &&
          <IconButton 
              variant='solid'
              size='lg'
              fontSize='35px'
              color={theme.colors.white}
              aria-label="AI Image"
              pos="fixed"
              bottom="10px"
              right="10%"
              icon={<Icon as={AIImageIcon} />}
              onClick={getImages}
            />
          }
          {totalPages > 0 && Array.from({ length: totalPages }).map((_, index) => (
              <BookPage key={index} pageNumber={index + 1} />
          ))}
      </VStack>
    
    
  );
};

export default Book;
