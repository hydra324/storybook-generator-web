import { VStack, HStack, Heading, Box, StackDivider, Button, ButtonGroup } from '@chakra-ui/react';

const Page = ({pageNumber, zIndex, navigateNext, navigatePrev}) => {
    return (
        <VStack pos="absolute" top="0" left="0" w="30%" zIndex={zIndex}>
            <Heading as="h4" size="md">{pageNumber}</Heading>
            <HStack>
                <Button colorScheme='linkedin' onClick={navigatePrev}>Previous Page</Button>
                <Button colorScheme='gray' onClick={navigateNext}>Next Page</Button>
            </HStack>
        </VStack>
    );
};

Page.defaultProps = {
    pageNumber: 1,
    zIndex: 1,
    navigateNext: () => {console.log('Next Page clicked!')},
    navigatePrev: () => {console.log('Previous Page clicked!')},
};

export default Page;