"use client";

import {
  Box,
  Container,
  Divider,
  Image,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";

export const Benefitt = () => {
  return (
    <Box
      pt={"30px"}
      style={{
        clipPath: "polygon(0 5%, 100% 0%, 100% 95%, 0 100%)",
      }}
      pb={{ base: "30px", md: "80px" }}
    >
      <Container maxW="6xl">
        <SimpleGrid pt={"24px"} spacing={"8"} columns={{ base: 1, md: 2 }}>
          <Box display={"flex"} alignItems={"center"} justifyContent={"center"}>
            <Image
              alt={"feature image"}
              src={"/p.png"}
              width={281}
              height={261}
            />
          </Box>
          <Box pb={"10px"}>
            <Text
              fontFamily={"Roboto Condensed"}
              fontSize={"32px"}
              fontWeight={700}
            >
              BẠN SẼ HỌC ĐƯỢC GÌ TỪ KHÓA HỌC
            </Text>
            <Divider
              mt={"15px"}
              borderColor={useColorModeValue("#b3b3b3", "#b3b3b3")}
              w={"80px"}
              borderWidth={3}
              borderRadius={"50px"}
            />

            <UnorderedList spacing={"10px"} pt={"16px"}>
              <ListItem>
                Xây dựng thương hiệu và phát triển bền vững cho các doanh nghiệp
              </ListItem>
              <ListItem>Hiểu rõ hành vi khách hàng trực tuyến</ListItem>
              <ListItem>Phối hợp các công cụ Digital Marketing</ListItem>
              <ListItem>Đo lường hiệu quả</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
