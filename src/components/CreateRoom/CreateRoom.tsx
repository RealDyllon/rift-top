import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputStepper,
  NumberInputField,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

export const CreateRoom = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>

      <Button
        onClick={onOpen}
        variant="outline"
        size="md"
        m="2"
        boxShadow="lg"
        bg="torch.600"
        _active={{
          bg: 'torch.300',
          transform: 'scale(0.98)',
        }}
        _hover={{
          bg: 'torch.400',
          transform: 'scale(0.98)',
        }}
      >
        Create New Room
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount
      >
        <ModalOverlay />
        <ModalContent fontFamily="Caudex">
          <ModalHeader>Create New Room</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Room Name</FormLabel>
              <Input placeholder="Room name" />
            </FormControl>

            <FormControl>
              <FormLabel mt={4}>Book</FormLabel>
              <Select variant="filled" placeholder="Select your book" isRequired>
                <option value="1">Book 1</option>
                <option value="2">Book 2</option>
                <option value="3">Book 3</option>
              </Select>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input size="lg" placeholder="Description" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Party Size</FormLabel>
              <NumberInput defaultValue={4} min={3} max={10}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button bg="torch.600" mr={3} onClick={onClose}>
              Create
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
