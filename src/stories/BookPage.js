import React from 'react';
import { HStack, IconButton, VStack, Icon } from '@chakra-ui/react';
import EmblaCarousel from './EmblaCarousel';
import Page from './Page';
import {AIImageIcon} from './AIImageIcon';
import theme from '../theme';


const BookPage = ({pageNumber}) => {
  const OPTIONS = {}
  // const SLIDES = [
  //   'https://img.freepik.com/free-vector/kids-discussing-with-book-forest_1308-30690.jpg?size=626&ext=jpg',
  //   'https://img.freepik.com/premium-vector/nature-outdoor-with-cute-kids-books-letter-cubes_679557-1977.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
  //   'https://img.freepik.com/free-vector/children-wild-animals-field_1308-31671.jpg?size=626&ext=jpg&ga=GA1.1.1039114739.1705691503&semt=ais',
    
  // ]

  
  const [slides, setSlides] = React.useState([]);

  const getImages = () => {
    // get images from api
    // set images from api
  }
  return (
    <VStack pos="relative" w="50%" h="100vh" m="auto">
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
            onClick={() => {}}
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
