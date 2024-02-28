import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import {CSS} from '@dnd-kit/utilities';
import theme from '../theme';
import {Textarea} from '@chakra-ui/react';
import {DragHandleIcon} from '@chakra-ui/icons';
import {Wrap} from '@chakra-ui/react';

const Draggable = ({x,y,dragID}) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragID,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
    cursor: 'grab',
    }

  return (
    <Wrap 
      position="absolute"
      top= {y}
      left= {x}
      style={style}
      {...attributes}
    >
      <DragHandleIcon ref={setNodeRef} {...listeners} color={theme.colors.white} />
      <Textarea 
            // position="absolute"
            placeholder={`Enter text`} 
            _hover={{ border: "1px solid white" }}
            _focus={{ border: "1px solid white" }}
            border="none"
            borderRadius="md"
            p={2}
            fontSize={theme.fontSizes["2xl"]}
            fontWeight={theme.fontWeights.light}
            fontFamily={theme.fonts.body}
            maxH="80%"
            resize="both"
            textAlign="center"
            w="50%"
            textColor={theme.colors.white}
            color={theme.colors.white}
            _placeholder={{color: theme.colors.white}}
        />
    </Wrap>
      
  );
};

export default Draggable;