"use client";

import {
  Grid,
  GridItem,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface IModalBase {
  isOpen: boolean;
  children: ReactNode;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, children } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white"} rounded={"sm"}>
          <ModalCloseButton />
          <ModalBody rounded={"xl"} p={0}>
            <Grid   gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
              <GridItem>{children}</GridItem>
              <GridItem display={{ base: "none", md: "block" }}>
                <Image
                  style={{ objectFit: "contain" }}
                  src="/popup.png"
                  alt="popup"
                  width={"100%"}
                  height={"auto"}
                  rounded={"sm"}
                />
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
