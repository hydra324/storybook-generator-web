import { VStack, HStack, Heading, Box, StackDivider, Button, ButtonGroup, Textarea, Text } from '@chakra-ui/react';

// dragover event listener for vstack

const Page = ({pageNumber, zIndex, navigateNext, navigatePrev}) => {
    return (
        <VStack pos="absolute" top="30%" left="30%" w="40vw" h="70vh" zIndex={zIndex} boxShadow="lg" borderRadius="md" bg="white" p={4}>
            <Textarea 
                position="absolute"
                placeholder={`${String.fromCharCode(9998)}`} 
                _hover={{ border: "1px solid black" }}
                _focus={{ border: "1px solid black" }}
                border="none"
                borderRadius="md"
                p={2}
                fontSize="2xl"
                maxH="80%"
                resize="both"
                textAlign="center"
            />
            <Text as="footer" size="md" mt={2} position="absolute" bottom={4}>{`Page ${pageNumber}`}</Text>
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