"use client";

import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Icon,
  Input,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { FiSearch } from "react-icons/fi";

export const Search = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="outline" onClick={onOpen}>
        <Icon as={FiSearch} w={"24px"} h={"24px"} color="black" />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Tìm kiếm bài viết</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Nhập dữ liệu..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" rounded={"sm"} mr={3} onClick={onClose}>
              Hủy
            </Button>
            <Button colorScheme="blue" rounded={"sm"}>
              Tìm kiếm
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};
