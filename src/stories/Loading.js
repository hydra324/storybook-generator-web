import { useState, React } from 'react';

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text, Spinner, VStack
  } from '@chakra-ui/react';

const Loading = ({isLoading}) => {
  return (
    <Modal isOpen={isLoading} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
            <VStack>
                <Spinner size="xl" />
                <Text as="h1">Loading...</Text>
            </VStack>
        </ModalContent>
    </Modal>
  );
};

Loading.defaultProps = {
  isLoading: false
};

export default Loading;
