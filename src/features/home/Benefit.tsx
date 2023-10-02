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

export const Benefit = () => {
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
          <Image
            alt={"feature image"}
            src={"/target.png"}
            width={700}
            height={290}
            p={"30px"}
            pt={0}
            pb={0}
          />
          <Box pb={"10px"}>
            <Text
              fontFamily={"Roboto Condensed"}
              fontSize={"32px"}
              fontWeight={700}
            >
              ĐỐI TƯỢNG PHÙ HỢP VỚI KHÓA HỌC
            </Text>
            <Divider
              mt={"15px"}
              borderColor={useColorModeValue("#b3b3b3", "#b3b3b3")}
              w={"80px"}
              borderWidth={3}
              borderRadius={"50px"}
            />
            <Text
              pt={"16px"}
              fontFamily={"Roboto Condensed"}
              fontSize={"18px"}
              fontWeight={700}
            >
              ÁP DỤNG CHO TẤT CẢ DOANH NGHIỆP, CÁ NHÂN
            </Text>
            <UnorderedList spacing={"10px"}>
              <ListItem>
                Đang hoạt động trong lĩnh vực kinh doanh, kinh doanh online,
                ngành dịch vụ, giáo dục và đào tạo.
              </ListItem>
              <ListItem>Cần tìm hiểu về công cụ Digital Marketing</ListItem>
              <ListItem>
                Muốn hiểu rõ hơn về đo lường hiệu quả và ứng dụng cho doanh
                nghiệp của mình.
              </ListItem>
              <ListItem>Nâng cao doanh số, phát triển bền vững</ListItem>
            </UnorderedList>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
