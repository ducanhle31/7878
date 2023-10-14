"use client";

import { Sidebar } from "@/layouts/components/Sidebar";
import {
  Container,
  GridItem,
  SimpleGrid,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutPost = ({
  children,
  title,
}: {
  children?: ReactNode;
  title?: string;
}) => {
  return (
    <>
      <Box
        w={"100%"}
        bg="rgba(0, 0, 0, 0)"
        bgSize="cover"
        bgRepeat={"no-repeat"}
        position="relative"
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="/bg-gt.jpg"
          zIndex={-1}
          filter="auto"
          brightness="40%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPosition={"0px"}
        ></Box>
        <Container maxW={"6xl"} py="62px">
          <Box>
            <Heading
              as="h2"
              textAlign={"center"}
              fontSize={{ base: "36px", lg: "40px" }}
              fontWeight={700}
              mt="75px"
              color={"white"}
            >
              {title || ""} âs
            </Heading>
            <Text
              mt={"18px"}
              fontSize={"16px"}
              textAlign={"center"}
              color={"white"}
              pb="60px"
            >
              Trang chủ - {title}
            </Text>
          </Box>
        </Container>
      </Box>
      <Container maxW={"6xl"} mt={"42px"}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"42px"}>
          <GridItem colSpan={{ lg: 2 }}>{children}</GridItem>
          <GridItem colSpan={{ lg: 1 }}>
            <Sidebar sticky="125px" />
          </GridItem>
        </SimpleGrid>
      </Container>
    </>
  );
};
