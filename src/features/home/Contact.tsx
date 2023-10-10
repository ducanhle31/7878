import {
  As,
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { InputRes } from "../../components/InputRes";
export const Item = ({
  path,
  title,
  desc,
  icon,
}: {
  path: string;
  title: string;
  desc: string;
  icon?: As;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      color={"#004956"}
      p={{ base: "16px", md: "20px", lg: "24px" }}
      border={"1px solid"}
      borderColor={"gray.300"}
      rounded={"sm"}
      boxShadow="2xl"
      mb={"40px"}
      _hover={{
        color: " white",
        transition: "height .5s ease-in-out",
        background:
          "linear-gradient(135deg,rgb(40,116,252) 0%,rgb(2,3,129) 100%)",
        "& Icon": {
          color: "white",
        },
        "& .desc-text": {
          color: "white",
        },
        "& svg": {
          color: "white",
        },
        "& Button": {
          color: "white",
        },
      }}
    >
      <Heading as={"h2"} size={{ base: "md" }}>
        {title}
      </Heading>
      <HStack spacing={"12px"} pt={"16px"}>
        <Icon
          as={icon}
          width={{ base: "50px", md: "100px" }}
          height={{ base: "50px", md: "100px" }}
          alt="Ngành kế toán HVTC"
          color={" #4054B2"}
          mt={"-28px"}
        />

        <VStack align={"start"}>
          <Text
            className="desc-text"
            color={"gray.500"}
            fontSize={{ base: ".8rem", md: "sm" }}
          >
            {desc}
          </Text>

          <Button mt={"22px"} variant={"link"} color={"#004956"}>
            Xem chi tiết
          </Button>
        </VStack>
      </HStack>
    </Box>
  );
};

export const Contact = () => {
  return (
    <Box bg={"white"} mb={"18px"}>
      <Container maxW="6xl">
        <SimpleGrid
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          <GridItem
            borderRadius={"5px"}
            bg="#a6a6a6a6"
            height="240px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Box mr={"20px"} fontSize={"45px"}>
              <FaPhone />
            </Box>
            <Box color={"#fff"}>
              <Text
                fontSize={{ base: "2xl", lg: "26px" }}
                fontWeight={"700"}
                lineHeight={"29px"}
                pb={"18px"}
              >
                Have any questions?
              </Text>
              <Text
                fontSize={{ base: "3xl", lg: "36px" }}
                fontWeight={"700"}
                lineHeight={"43.2px"}
              >
                Call:123456789
              </Text>
            </Box>
          </GridItem>
          <GridItem
            borderRadius={"5px"}
            bg="#a6a6a6a6"
            height="240px"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Text
              color={"#021d6c"}
              fontSize={{ base: "2xl", lg: "26px" }}
              fontWeight={"700"}
              lineHeight={"31px"}
              pb={"22px"}
            >
              Contact for getting quote:
            </Text>
            <Flex>
              <Box maxW="md">
                <InputRes placeholder="Nhập email để đăng ký" label="Đăng ký" />
              </Box>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
