import {React,useState } from 'react';
import { HStack, IconButton, VStack, Icon, Tooltip} from '@chakra-ui/react';
import EmblaCarousel from './EmblaCarousel';
import Page from './Page';
import {AIImageIcon} from './AIImageIcon';
import theme from '../theme';
import axios from 'axios';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text, Spinner
} from '@chakra-ui/react';
const API_HOST = process.env.REACT_APP_API_URL;


const BookPage = ({pageNumber}) => {
  const OPTIONS = {}

  
  const [slides, setSlides] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [pageText,setPageText] = useState('');

  const getImages = () => {
    // get images from api
    console.log(process.env.NODE_ENV);
    setIsLoading(true);
    axios.post(`${API_HOST}/generate_images`, {'rawText':pageText})
        .then(res => setSlides(res.data.imageUrls))
        .finally(() => setIsLoading(false));
  }
  return (
    <VStack className='bookpage-stack' pos="relative" w="50%" h="100vh" m="auto" bg={slides.length>0 ? 'transparent' : 'brand.200'}>
        <Modal isOpen={isLoading} closeOnOverlayClick={false}>
          <ModalOverlay />
          <ModalContent>
              <VStack>
                  <Spinner size="xl" />
                  <Text as="h1">Loading...</Text>
              </VStack>
          </ModalContent>
        </Modal>
        {
          <Tooltip label="Generate AI Image" aria-label="Generate AI Image">
            <IconButton 
            variant='solid'
            size='lg'
            fontSize='35px'
            color='brand.200'
            bg='brand.200'
            _hover={{bg: 'brand.100'}}
            aria-label="AI Image"
            pos="absolute"
            bottom="0.3rem"
            right="-4rem"
            icon={<Icon as={AIImageIcon} />}
            onClick={getImages}
          />
          </Tooltip>
        }
        {slides.length>0 && <EmblaCarousel slides={slides} options={OPTIONS} />}
        <Page pageNumber={pageNumber} />
    </VStack>
  );
};

BookPage.defaultProps = {
  pageNumber: 1
};

export default BookPage;
