"use client";

import {
  Box,
  Container,
  Divider,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export const Object = () => {
  return (
    <Box
      bg={" linear-gradient(125deg, #feaa26, #ea6c55);"}
      pt={{ base: "100px", md: "30px" }}
      style={{
        clipPath: "polygon(0 5%, 100% 0%, 100% 100%, 0 100%)",
      }}
      pb={"129px"}
    >
      <Container maxW="6xl">
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={10}>
          <Flex
            pt={"64px"}
            order={{ base: 0, md: 1 }}
            justifyContent={"center"}
          >
            <Image
              alt={"feature image"}
              src={"/water.png"}
              width={310}
              height={318}
              style={{ marginTop: "67px" }}
            />
          </Flex>
          <GridItem colSpan={{ base: 1, lg: 2 }} pt={"64px"}>
            <Box color={"white"}>
              <Text
                fontFamily={"Roboto Condensed"}
                fontSize={"32px"}
                fontWeight={700}
                color={"white"}
              >
                LỢI ÍCH CỦA KHÓA HỌC
              </Text>
              <Divider
                mt={"15px"}
                borderColor={useColorModeValue("white", "white")}
                w={"80px"}
                borderWidth={3}
                borderRadius={"50px"}
              />
              <Text
                lineHeight={"25px"}
                pt={"16px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Học viên sẽ được cung cấp những bài viết, tài liệu, hình ảnh,
                video, … phù hợp cho toàn khóa học.
              </Text>
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Trong quá trình thực hành luôn có sự hỗ trợ tốt nhất từ diễn
                giả.
              </Text>
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Thu hút, tiếp cận và cung cấp giá trị cho các khách hàng và
                khách hàng tiềm năng.
              </Text>
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Nắm được các giải pháp thu hút khách hàng.
              </Text>
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Học viên được cung cấp các hệ thống Website, Quản lý Quan hệ
                Khách hàng (CRM), gửi Email tự động theo hệ thống, …
              </Text>
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Lưu trữ, phân loại, tiếp cận và quản lý hiệu quả hoạt động tiếp
                thị và chăm sóc khách hàng.
              </Text>
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Tạo dựng được hệ thống có khả năng cung cấp các báo cáo chi tiết
                và đầy đủ về hiệu quả của từng hoạt động tiếp thị và bán hàng.
              </Text>{" "}
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Xây dựng thương hiệu và phát triển bền vững cho các doanh
                nghiệp.
              </Text>{" "}
              <Text
                lineHeight={"25px"}
                fontFamily={"Montserrat"}
                fontSize={"18px"}
              >
                Mỗi một phần của bài giảng là những trải nghiệm thú vị. Học viên
                sẽ thao tác theo sự hướng dẫn của diễn giả.
              </Text>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
