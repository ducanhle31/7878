"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import { AiFillCaretRight } from "react-icons/ai";
interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactNode;
}

export const Banner = () => {
  return (
    <Box
      bg={" linear-gradient(125deg, #feaa26, #e04c6e);"}
      pt={"59px"}
      pb={"85px"}
      style={{
        clipPath: "polygon(0 0%, 100% 0%, 100% 95%, 0 100%)",
      }}
    >
      <Container maxW={"6xl"} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex order={{ base: 0, md: 1 }}>
            <Image
              alt={"feature image"}
              src={"/intro.png"}
              width={700}
              height={500}
            />
          </Flex>
          <Stack spacing={4} pt={"64px"}>
            <Text
              color={"white"}
              fontWeight={600}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              borderRadius={"100px"}
              borderWidth="1px"
              borderColor="white"
              p={2}
              px={"20px"}
              alignSelf={"flex-start"}
              _hover={{ bg: "white", color: "#666666" }}
            >
              Khóa học
            </Text>
            <Text
              fontWeight={400}
              color={"white"}
              fontSize={{ base: "sm", md: "md", lg: "md" }}
            >
              LÀM THẾ NÀO ĐỂ MARKETING HIỆU QUẢ TRONG DOANH NGHIỆP
            </Text>
            <Heading
              fontFamily={"Roboto Condensed"}
              color={"white"}
              fontSize={"48px"}
              fontWeight={700}
            >
              VÕ MINH HUY
            </Heading>
            <Text fontWeight={400} color={"#FFF"} fontSize={"md"}>
              FOUNDER:IMP INBOUND MARKETING PARTNER
            </Text>

            <Box display={"flex"}>
              <Text fontWeight={700} color={"white"}>
                Thời gian:
              </Text>{" "}
              &nbsp;
              <Text fontWeight={400} color={"white"}>
                {" "}
                12.1.2019
              </Text>
            </Box>
            <Box>
              <Text fontWeight={700} color={"white"}>
                Địa điểm:
              </Text>
              <Text fontWeight={400} color={"white"}>
                Trường Cao đẳng công nghiệp – 70 Nguyễn Huệ, P. Vĩnh Ninh, TP.
                Huế
              </Text>
            </Box>

            <Link
              href="#section1"
              color={"white"}
              fontWeight={600}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              borderRadius={"100px"}
              borderWidth="1px"
              borderColor="white"
              py={"5px"}
              px={"20px"}
              alignSelf={"flex-start"}
              display={"flex"}
              alignItems={"center"}
              _hover={{ bg: "white", color: "#666666" }}
            >
              <AiFillCaretRight /> &nbsp; Tìm hiểu thêm
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
