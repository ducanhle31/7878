"use client";

import {
  Box,
  Container,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Person = () => {
  return (
    <Box bg={" linear-gradient(125deg, #feaa26, #ea6c55)"}>
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Flex
            pt={"10px"}
            pb={"20px"}
            order={{ base: 0, md: 1 }}
            justifyContent={"center"}
          >
            <Image
              alt={"feature image"}
              src={"/mrhuy.png"}
              width={413}
              height={570}
            />
          </Flex>
          <Stack
            spacing={4}
            pt={{ base: "0px", md: "125px" }}
            pb={{ base: "50px" }}
          >
            <Box color={"white"}>
              <Text
                fontFamily={"Roboto Condensed"}
                fontSize={"32px"}
                fontWeight={700}
                color={"white"}
              >
                DIỄN GIẢ
              </Text>
              <Divider
                mt={"15px"}
                borderColor={useColorModeValue("white", "white")}
                w={"80px"}
                borderWidth={3}
                borderRadius={"50px"}
              />
              <Text
                lineHeight={"25.6px"}
                pt={"16px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Võ Minh Huy – Diễn giả hàng đầu TP. Hồ Chí Minh – Nhiều năm kinh
                nghiệm trong các tổ chức giáo dục, đào tạo và dịch vụ. Một
                blogger về online marketing, thích chia sẽ những gì mình biết,
                học và trải nghiệm Founder: IMP – Inbound Marketing Partner
              </Text>
              <Text
                lineHeight={"25.6px"}
                pt={"21px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Với phương pháp giảng hiện đại, chi tiết, dễ hiểu… Chắc chắn
                rằng đây sẽ là một chương trình đào tạo Quy trình Digital
                Marketing ứng dụng tuyệt vời dành cho bạn!
              </Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
