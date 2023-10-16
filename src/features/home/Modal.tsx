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
        <ModalContent bg={"white"}>
          <ModalCloseButton />
          <ModalBody rounded={"xl"} p={0}>
            <Grid templateColumns="repeat(2, 1fr)">
              <GridItem>
                <FormContact title="Để lại thông tin" />
              </GridItem>
              <GridItem>
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
