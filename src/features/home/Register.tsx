"use client";

import { Box, Container, Image, Link } from "@chakra-ui/react";
import { AiFillCaretRight } from "react-icons/ai";
export const Register = () => {
  return (
    <Box>
      <Image
        alt={"feature image"}
        src={"/style-1.2.jpg"}
        width={"100%"}
        height={"auto"}
        style={{ objectFit: "contain" }}
      />
      <Image
        alt={"feature image"}
        src={"/bg.jpg"}
        width={"100%"}
        height={173}
      />
      <Container
        maxW="6xl"
        display={"flex"}
        justifyContent={"center"}
        position={"relative"}
        top={"-120px"}
      >
        <Link
          href="#section8"
          color={"white"}
          fontWeight={400}
          fontSize={{ base: "sm", md: "md", lg: "2xl" }}
          borderRadius={"100px"}
          borderWidth="1px"
          borderColor="white"
          p={2}
          pl={"20px"}
          pr={"20px"}
          transition="background-color 0.3s, color 0.3s"
          textTransform={"uppercase"}
          alignSelf={"flex-start"}
          display={"flex"}
          alignItems={"center"}
          _hover={{ bg: "white", color: "#666666" }}
        >
          <AiFillCaretRight /> &nbsp; Đăng ký ngay
        </Link>
      </Container>
    </Box>
  );
};
