import { VStack, Text } from '@chakra-ui/react';
import theme from '../theme';
import {DndContext} from '@dnd-kit/core';
import {useState} from 'react';
import Draggable from './Draggable';

const Page = ({pageNumber}) => {
    const defaultCoordinates = {
        x: 100,
        y: 100,
      };
    const [{x, y}, setCoordinates] = useState(defaultCoordinates);

    

    const handleDragEnd = ({active, delta}) => {
        console.log(active.id);
        setCoordinates( ({x,y}) => ({x: x + delta.x, y: y + delta.y}) );
    }

    return (
            <DndContext onDragEnd={handleDragEnd}>
                <VStack pos="absolute" top="0" left="0" w="100%" h="100%" boxShadow="lg" borderRadius="md" p={4} bg="transparent" overflow="hidden">
                    <Draggable x={x} y={y} dragID={'draggable1'}/>
                    <Text as="footer" size="md" mt={2} pos="absolute" bottom={4} color={theme.colors.white}>{`Page ${pageNumber}`}</Text>
                </VStack>
            </DndContext>
    );
};

Page.defaultProps = {
    pageNumber: 1
};

export default Page;