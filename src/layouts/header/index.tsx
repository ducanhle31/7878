"use client";
import { BtnThemeContact } from "@/components/BtnTheme";
import { FormGetFly1 } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { Box, Container, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";

interface NavProps {
  isSticky: boolean;
}
const navtransDown = keyframes`
  from {
    transform: translate(0, -90px);
  }
  to {
    transform: translate(0, 0);
  }
`;
const NavContainer = styled.nav`
  z-index: 1000;
  transition: all 0s ease-out;

  &.sticky {
    position: fixed;
    z-index: 1000;
    width: 100%;
    top: 0px;
    background: #fff;
    animation: ${navtransDown} 0.7s 1 linear;
  }

  @media (max-width: 992px) {
    &.sticky {
      top: 0px;
    }
  }
`;

const NavbarBrand = styled.div`
  display: flex;
  justify-content: center;

  &.sticky {
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
  }
`;

const HiddenBox = styled(Box)`
  display: none;
  height: 76px;

  &.sticky {
    display: block;
  }
`;

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navContainerClass = isSticky ? "sticky" : "";
  const navbarBrandClass = isSticky ? "sticky" : "";
  const hiddenBoxClass = isSticky ? "sticky" : "";

  return (
    <NavContainer className={navContainerClass}>
      <NavbarBrand className={navbarBrandClass}>
        <Container
          as={Flex}
          bg={"white"}
          color={"gray.600"}
          minH={"60px"}
          py={{ base: 2 }}
          align={"center"}
          maxW={"6xl"}
          mt={{ lg: isSticky ? "0px" : "-30px", base: "0px" }}
          boxShadow={
            isSticky
              ? "none"
              : "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
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
        <HiddenBox className={hiddenBoxClass}></HiddenBox>
      </NavbarBrand>

      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormGetFly1 title="Để lại thông tin" />
      </ModalBase>
    </NavContainer>
  );
};
export const Header = () => {
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
          backgroundImage: "linear-gradient(135deg,#007180 0%,#007180 100%)",
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
      <Navigation />
    </>
  );
};
