import { Heading, Icon, Tooltip, VStack} from '@chakra-ui/react';
import {React, useState, useRef, useEffect} from 'react';
import BookPage from './BookPage';
import {IconButton, Text, Button, List, ListItem, ListIcon, Image } from '@chakra-ui/react';
import {AddIcon, CheckIcon, SmallCloseIcon} from '@chakra-ui/icons';
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter} from '@chakra-ui/react';

const Book = () => {

const [displayDisclaimerModal, setDisplayDisclaimerModal] = useState(true);
    
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
          <Modal isOpen={displayDisclaimerModal} closeOnOverlayClick={true} onClose={() => {}}>
            <ModalOverlay />
            <ModalContent fontFamily='sans-serif'>
              <ModalHeader textAlign='center'>Disclaimer</ModalHeader>
              <ModalCloseButton onClick={() => setDisplayDisclaimerModal(false)}/>
              <ModalBody>
                <Heading as="h2" size="lg" fontFamily='sans-serif' mb='20px' textAlign='center'>Under construction</Heading>
                {/* <Image src={require('../assets/under-construction.svg')} /> */}
                <Text fontSize='md' textAlign='center' mb='20px'>Please be aware that this website is still under construction and may not work as expected.
                  I am hard to make it better. The planned roadmap is as follows:</Text>
                  <List spacing={3}>
                    <ListItem>
                      <ListIcon as={CheckIcon} color='green.500' />
                      Adding Pages
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color='green.500' />
                      Drag and drop Text
                    </ListItem>
                    <ListItem>
                      <ListIcon as={CheckIcon} color='green.500' />
                      Image carousel
                    </ListItem>
                    {/* You can also use custom icons from react-icons */}
                    <ListItem>
                      <ListIcon as={SmallCloseIcon} color='red.500' />
                      Backend Integration
                    </ListItem>
                  </List>
              </ModalBody>
            </ModalContent>
          </Modal>
          {totalPages > 0 && Array.from({ length: totalPages }).map((_, index) => (
              <BookPage key={index} pageNumber={index + 1} />
          ))}
          {totalPages === 0 && <Text fontSize='lg' marginTop='25%'>Add a page to start</Text>}
          {
            <Tooltip label="Add New Page" aria-label="Add New Page">
            <IconButton 
              isRound={true}
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
