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
import { FormContact } from "../../components/FormContact";

interface IModalBase {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const ModalBase = (props: IModalBase) => {
  const { onClose, isOpen } = props;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"2xl"} isCentered>
        <ModalOverlay />
        <ModalContent bg={"white"} rounded={"sm"}>
          <ModalCloseButton />
          <ModalBody rounded={"xl"} p={0}>
            <Grid gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
              <GridItem>
                <FormContact title="Để lại thông tin" />
              </GridItem>
              <GridItem display={{ base: "none", md: "block" }}>
                <Image
                  style={{ objectFit: "contain" }}
                  src="/popup.png"
                  alt="popup"
                  width={"100%"}
                  height={"auto"}
                />
              </GridItem>
            </Grid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
