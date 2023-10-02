"use client";

import { Box, Container, Divider, Flex, useDisclosure } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { Logo } from "../components/Logo";
import { MobileNav } from "../components/MobileNav";

export const Header = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Divider />
      <Box
        pos={"absolute"}
        top={"0"}
        left={0}
        right={0}
        zIndex={10}
        bg={"#ffffff0"}
      >
        <Container
          as={Flex}
          bg={"#ffffff0"}
          color={"gray.600"}
          minH={"110px"}
          py={{ base: 2 }}
          px={{ base: 4 }}
          align={"center"}
          maxW="6xl"
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <MobileNav />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "start" }}
            align={"center"}
          >
            <Logo />
            <Flex display={{ base: "none", lg: "flex" }} ml={140}>
              <DesktopNav />
            </Flex>
          </Flex>
        </Container>
      </Box>
    </>
  );
};
