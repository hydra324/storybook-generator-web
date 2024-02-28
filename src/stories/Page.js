import { VStack, HStack, Heading, Box, StackDivider, Button, ButtonGroup, Textarea, Text } from '@chakra-ui/react';
import theme from '../theme';
import {DndContext} from '@dnd-kit/core';
import {useState} from 'react';
import Draggable from './Draggable';
import {restrictToWindowEdges} from '@dnd-kit/modifiers';

// dragover event listener for vstack

const Page = ({pageNumber, zIndex, navigateNext, navigatePrev}) => {
    const defaultCoordinates = {
        x: 0,
        y: 0,
      };
    const [{x, y}, setCoordinates] = useState(defaultCoordinates);

    

    const handleDragEnd = ({active, delta}) => {
        console.log(active.id);
        setCoordinates( ({x,y}) => ({x: x + delta.x, y: y + delta.y}) );
    }

    return (
            <DndContext onDragEnd={handleDragEnd}>
                <VStack pos="absolute" top="30%" left="30%" w="40vw" h="70vh" zIndex={zIndex} boxShadow="lg" borderRadius="md" p={4} bg={theme.colors.purple} overflow="hidden">
                    <Draggable x={x} y={y} dragID={'draggable1'}/>
                    <Text as="footer" size="md" mt={2} pos="absolute" bottom={4} color={theme.colors.white}>{`Page ${pageNumber}`}</Text>
                </VStack>
            </DndContext>
    );
};

Page.defaultProps = {
    pageNumber: 1,
    zIndex: 1,
    navigateNext: () => {console.log('Next Page clicked!')},
    navigatePrev: () => {console.log('Previous Page clicked!')},
};

export default Page;