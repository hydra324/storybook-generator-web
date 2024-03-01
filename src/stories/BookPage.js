import {React,useState } from 'react';
import { HStack, IconButton, VStack, Icon} from '@chakra-ui/react';
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
  // const SLIDES = [
  //   'https://img.freepik.com/free-vector/kids-discussing-with-book-forest_1308-30690.jpg?size=626&ext=jpg',
  //   'https://img.freepik.com/premium-vector/nature-outdoor-with-cute-kids-books-letter-cubes_679557-1977.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
  //   'https://img.freepik.com/free-vector/children-wild-animals-field_1308-31671.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
    
  // ]

  
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
    <VStack className='bookpage-stack' pos="relative" w="50%" h="100vh" m="auto">
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
            <IconButton 
            variant='solid'
            size='lg'
            fontSize='35px'
            color={theme.colors.white}
            aria-label="AI Image"
            pos="absolute"
            bottom="0.3rem"
            right="-4rem"
            icon={<Icon as={AIImageIcon} />}
            onClick={getImages}
          />
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
