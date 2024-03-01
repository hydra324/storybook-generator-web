import { Tooltip, VStack} from '@chakra-ui/react';
import {React, useState, useRef, useEffect} from 'react';
import BookPage from './BookPage';
import {IconButton, Text } from '@chakra-ui/react';
import {AddIcon} from '@chakra-ui/icons';

const Book = () => {
    
const pageRef = useRef(null);
  const [totalPages, setTotalPages] = useState(0);
  useEffect(() => {
    if (pageRef.current) {
      pageRef.current.scrollIntoView(
        {
          behavior: 'smooth',
          block: 'end',
          inline: 'nearest'
        })
    }
  },
  [totalPages]);
  const addPage = () => {
    setTotalPages(totalPages + 1);
    // scroll to bottom
  }
  return (
      <VStack className='book-stack' ref={pageRef}>
          {totalPages > 0 && Array.from({ length: totalPages }).map((_, index) => (
              <BookPage key={index} pageNumber={index + 1} />
          ))}
          {totalPages === 0 && <Text fontSize='lg' marginTop='25%'>Add a page to start</Text>}
          {
            <Tooltip label="Add New Page" aria-label="Add New Page">
            <IconButton 
            variant='solid'
            size='lg'
            fontSize='25px'
            // color='brand.200'
            bg='brand.200'
            _hover={{bg: 'brand.100'}}   
            aria-label="Add New Page"
            pos="fixed"
            top="0.3rem"
            right="1rem"
            icon={<AddIcon />}
            onClick={addPage}
            />
            </Tooltip>
        }
      </VStack>
    
    
  );
};

export default Book;
