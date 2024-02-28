import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import theme from '../theme';
import {Textarea} from '@chakra-ui/react';

const Draggable = ({x,y,dragID}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragID,
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    cursor: 'grab',
    }

  return (
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
            w="40%"
            top= {y}
            left= {x}
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
        />
  );
};

export default Draggable;
