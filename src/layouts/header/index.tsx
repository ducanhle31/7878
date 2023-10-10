"use client";
import { BtnThemeContact } from "@/components/BtnTheme";
import { FormContact } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { Box, Container, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";
import { useEffect, useState } from "react";

export const Header = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  const [containerWidth, setContainerWidth] = useState("6xl");
  const [containerPadding, setContainerPadding] = useState("4");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Adjust the width of the Container based on the scroll position
      if (scrollTop > 0) {
        setContainerWidth("100%");
        setContainerPadding("10px");
      } else {
        setContainerWidth("6xl");
        setContainerPadding("4"); // Set the original width here
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Box
        height={"150px"}
        zIndex={"1"}
        display={{ base: "none", lg: "block" }}
        pos={"relative"}
        overflow={"hidden"}
        _after={{
          content: "''",
          width: "52%",
          height: "100%",
          backgroundImage:
            "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(2,3,129)100%)",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -1,
          transform: "skew(-20deg)",
          WebkitTransformOrigin: "left bottom",
          display: "block",
        }}
      >
        <HStack justify={"center"} py={"16px"}>
          <HeaderTop />
        </HStack>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        position={"sticky"}
        top={"29px"}
        zIndex={1000}
      >
        <Container
          as={Flex}
          bg={"white"}
          color={"gray.600"}
          minH={"60px"}
          py={{ base: 2 }}
          px={containerPadding}
          align={"center"}
          maxW={containerWidth}
          mt={"-30px"}
          boxShadow={
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;"
          }
          pos={"absolute"}
          zIndex={5}
        >
          <Flex ml={{ base: -2 }} display={{ base: "flex", lg: "none" }}>
            <MobileNav />
          </Flex>
          <Flex
            flex={{ base: 1 }}
            justify={{ base: "center", lg: "start" }}
            align={"center"}
          >
            <Flex display={{ base: "none", lg: "flex" }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
          <BtnThemeContact size={"lg"} onClick={onToggle}>
            Đăng ký tư vấn
          </BtnThemeContact>
        </Container>
      </Box>
  
     <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormContact onClose={onClose} />
      </ModalBase> 
    </>
  );
};
