"use client";
import { BtnThemeContact } from "@/components/BtnTheme";
import { FormContact } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import { Box, Container, Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { DesktopNav } from "../components/DeskhopNav";
import { HeaderTop } from "../components/HeaderTop";
import { MobileNav } from "../components/MobileNav";

interface NavProps {
  isSticky: boolean;
}

const NavContainer = styled.nav<NavProps>`
  z-index: 1000;

  transition: all 0.5s ease-out;
  ${(props) =>
    props.isSticky &&
    css`
      position: fixed;
      z-index: 1000;
      width: 100%;
      top: 0px;
      background: #fff;
      animation: ${navtransDown} 0.7s 1 linear;
    `}
  @media (max-width: 992px) {
    ${(props) =>
      props.isSticky &&
      css`
        top: 0px;
      `}
  }
`;

const NavbarBrand = styled.div<NavProps>`
  display: flex;
  justify-content: center;

  box-shadow: ${(props) =>
    props.isSticky
      ? "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px"
      : "none"};
`;
const HiddenBox = styled(Box)<NavProps>`
  display: ${(props) => (props.isSticky ? "block" : "none")};
  height: 76px;
`;
const navtransDown = keyframes`
  from {
    transform: translate(0, -90px);
  }
  to {
    transform: translate(0, 0);
  }
`;

export const Navigation = () => {
  const [isSticky, setIsSticky] = useState<boolean>(false);
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

  return (
    <NavContainer isSticky={isSticky}>
      <Box>
        <NavbarBrand isSticky={isSticky}>
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
          <HiddenBox isSticky={isSticky}></HiddenBox>
        </NavbarBrand>
      </Box>
      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormContact onClose={onClose} />
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
      <Navigation />
    </>
  );
};
