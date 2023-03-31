import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PatchTask } from "../Redux/task/task.action";

const UpdateModal = ({ title, status, id }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((s) => s.task);
  const { isOpen, onOpen, onClose } = useDisclosure();
  let obj = {
    title: title,
  };
  const [updated, setUpdated] = useState(obj);
  useEffect(() => {
    if (!loading) {
      onClose();
    }
  }, [loading]);
  return (
    <>
      <Button
        colorScheme="green"
        onClick={() => {
          onOpen();
        }}
      >
        UPDATE
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              type="text"
              value={updated.title}
              name="title"
              onChange={(e) => {
                setUpdated({ ...updated, [e.target.name]: e.target.value });
              }}
              placeholder="title..."
            ></Input>
            <Button
              onClick={() => {
                dispatch(PatchTask({ id, data: { status: !status } }));
              }}
              colorScheme="pink"
              isLoading={loading ? true : false}
            >
              Toggle Status
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                dispatch(PatchTask({ id, data: updated }));
              }}
              isLoading={loading ? true : false}
            >
              Update
            </Button>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default UpdateModal;
