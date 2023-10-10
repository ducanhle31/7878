import {
  Box,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { FormContactFooter } from "./FormContact";

export const BoxTest = () => {
  return (
    <>
      <Box
        bg={"black"}
        bgImage={"/bg-coming-soon.png"}
        bgRepeat={"no-repeat"}
        backgroundPosition="center"
      >
        <Container maxW={"6xl"}>
          <Heading
            as="h1"
            textAlign={"center"}
            fontSize={{ base: "36px", lg: "55px" }}
            fontWeight={700}
            pt="75px"
            color={"white"}
          >
            LỊCH KHAI GIẢNG ĐẠI HỌC HỆ TỪ XA
          </Heading>
          <Text
            mt={"24px"}
            fontSize={{ base: "16px", lg: "24px" }}
            textAlign={"center"}
            color={"white"}
          >
            Lịch khai giảng dự kiến Hệ từ xa khóa mới nhất{" "}
          </Text>

          <SimpleGrid
            gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
          >
            <GridItem colSpan={2} pr={{ base: "0", md: "30px", lg: "30px" }}>
              <SimpleGrid
                spacing="30px"
                gridTemplateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
                mt="73px"
              >
                <Box
                  bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
                  borderRadius={"18px"}
                  h={{ base: "160px", lg: "180px" }}
                
                >
                  <Flex
                    mt="27px"
                    lineHeight="50px"
                    textAlign={"center"}
                    fontSize="50px"
                    fontWeight="700"
                    color="#222222"
                    flexDirection="column"
                    alignItems="center"
                  >
                    22
                    <Divider
                      w={"40px"}
                      pt="5px"
                      textAlign={"center"}
                      borderColor={"#ff7300"}
                      style={{ borderBottomWidth: "4px" }}
                    />
                  </Flex>

                  <Text lineHeight="45px" textAlign={"center"} fontSize="24px">
                    Ngày
                  </Text>
                </Box>
                <Box
                  bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
                  borderRadius={"18px"}
                  h={{ base: "160px", lg: "180px" }}
                >
                  {" "}
                  <Flex
                    mt="27px"
                    lineHeight="50px"
                    textAlign={"center"}
                    fontSize="50px"
                    fontWeight="700"
                    color="#222222"
                    flexDirection="column"
                    alignItems="center"
                  >
                    10
                    <Divider
                      w={"40px"}
                      textAlign={"center"}
                      borderColor={"#ff7300"}
                      pt="5px"
                      style={{ borderBottomWidth: "4px" }}
                    />
                  </Flex>
                  <Text lineHeight="45px" textAlign={"center"} fontSize="24px">
                    Tháng
                  </Text>
                </Box>
                <Box
                  bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
                  borderRadius={"18px"}
                  h={{ base: "160px", lg: "180px" }}
                >
                  <Flex
                    mt="27px"
                    lineHeight="50px"
                    textAlign={"center"}
                    fontSize="50px"
                    fontWeight="700"
                    color="#222222"
                    flexDirection="column"
                    alignItems="center"
                  >
                    2023
                    <Divider
                      w={"40px"}
                      textAlign={"center"}
                      borderColor={"#ff7300"}
                      pt="5px"
                      style={{ borderBottomWidth: "4px" }}
                    />
                  </Flex>
                  <Text lineHeight="45px" textAlign={"center"} fontSize="24px">
                    Năm
                  </Text>
                </Box>
              </SimpleGrid>
            </GridItem>
            <GridItem colSpan={1}>
              <Box
                h={{ base: "200px", lg: "180px" }}
                px="30px"
                borderRadius={"18px"}
                mt="73px"
                bg=" linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);"
              >
                <Text lineHeight="50px" fontSize="24px" fontWeight="700">
                  Địa điểm tổ chức
                </Text>{" "}
                <Text fontSize="18px">
                  Hội trường Học viện Tài chính, Số 58 Lê Văn Hiến, phường Đức
                  Thắng, quận Bắc Từ Liêm, Thành phố Hà Nội. 
                </Text>{" "}
              </Box>
            </GridItem>
          </SimpleGrid>
          <Box mt="80px" pb="100px">
            <FormContactFooter />
          </Box>
        </Container>
      </Box>
    </>
  );
};
