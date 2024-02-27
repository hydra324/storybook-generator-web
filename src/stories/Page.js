import { VStack, HStack, Heading, Box, StackDivider, Button, ButtonGroup, Textarea, Text } from '@chakra-ui/react';
import theme from '../theme';

// dragover event listener for vstack

const Page = ({pageNumber, zIndex, navigateNext, navigatePrev}) => {
    return (
        <VStack pos="absolute" top="30%" left="30%" w="40vw" h="70vh" zIndex={zIndex} boxShadow="lg" borderRadius="md" p={4} bg={theme.colors.purple}>
            <Textarea 
                position="absolute"
                placeholder={`Enter text`} 
                _hover={{ border: "1px solid white" }}
                _focus={{ border: "1px solid white" }}
                border="none"
                borderRadius="md"
                p={2}
                fontSize={theme.fontSizes["2xl"]}
                fontWeight={theme.fontWeights.bold}
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