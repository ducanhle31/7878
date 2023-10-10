"use client";

import { Sidebar } from "@/layouts/components/Sidebar";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";

export const LayoutNganh = ({
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
        bgImage="/bg-page-title.jpg"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"-10px"}
      >
        <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            fontSize={{ base: "36px", lg: "40px" }}
            fontWeight={700}
            mt="75px"
            color={"white"}
          >
            {title || ""}
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
        </Container>
      </Box>
      <Box color={"blue.900"}>
        <Box>
          <Container maxW={"6xl"} py="42px">
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"24px"}>
              <GridItem colSpan={{ base: 1, md: 2 }}>{children}</GridItem>
              <GridItem>
                <Sidebar sticky="125px" />
              </GridItem>
            </SimpleGrid>
          </Container>
        </Box>
      </Box>
    </>
  );
};
