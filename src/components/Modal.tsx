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
  onOpen: () => void;
  onClose: () => void;
  form: ReactNode;
}
export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen, form } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white"} rounded={"sm"}>
          <ModalCloseButton />
          <ModalBody rounded={"xl"} p={0}>
            <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
              <GridItem>{form}</GridItem>
              <GridItem display={{ base: "none", md: "block" }}>
                <Image
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "auto",
                  }}
                  src="/popup.png"
                  alt="popup"
                />
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
