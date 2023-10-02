"use client";

import styles from "@/styles/Home.module.css";
import {
  Box,
  Container,
  Divider,
  GridItem,
  List,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FormContact } from "../../components/FormContact";

export const Contact = () => {
  return (
    <Box
      pos={"relative"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      h={{ base: "750px", lg: "500px" }}
      style={{
        clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 100%)",
      }}
    >
      <Container
        maxW={"6xl"}
        pt={"60px"}
        pos={"absolute"}
        top={0}
        left={"50%"}
        transform={"translateX(-50%)"}
        className="context"
      >
        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={"24px"}>
          <GridItem order={{ base: 1, md: 0 }}>
            <FormContact />
          </GridItem>
          <GridItem pt={"24px"}>
            <Box color={"white"}>
              <List
                spacing={"18px"}
                p={{ base: "12px", md: "16px" }}
                rounded={"sm"}
              >
                <Box
                  display={"flex"}
                  alignItems={"flex-end"}
                  flexDirection={"column"}
                >
                  <Text
                    textAlign={"right"}
                    fontWeight={700}
                    fontSize={"32px"}
                    color={"white"}
                    fontFamily={"Roboto Condensed"}
                  >
                    Liên hệ
                  </Text>
                  <Divider
                    mt={"10px"}
                    borderColor={useColorModeValue("white", "white")}
                    w={"80px"}
                    borderWidth={3}
                    borderRadius={"50px"}
                  />
                  <Text
                    mt={"16px"}
                    letterSpacing={"0.7px"}
                    textAlign={"right"}
                    fontFamily={"Montserrat"}
                    textTransform={"uppercase"}
                  >
                    ÁP DỤNG ĐẾN HẾT NGÀY 12/1/2019
                  </Text>
                  <Text
                    letterSpacing={"0.7px"}
                    textAlign={"right"}
                    fontFamily={"Montserrat"}
                    textTransform={"uppercase"}
                  >
                    ĐĂNG KÝ KHÓA HỌC NGAY ĐỂ NHẬN ƯU ĐÃI
                  </Text>
                  <Text
                    textAlign={"left"}
                    color={"white"}
                    fontWeight={600}
                    fontSize={{ base: "sm", md: "md", lg: "lg" }}
                    borderRadius={"100px"}
                    px={"19px"}
                    py={"7px"}
                    mt={"20px"}
                    bg={"#ed1c24"}
                    _hover={{ bg: "#b20000;" }}
                  >
                    HẤP DẪN ĐẾN TỪNG GIÂY
                  </Text>
                </Box>
              </List>
            </Box>
          </GridItem>
        </SimpleGrid>
      </Container>

      {/* Animate  */}
      <Box
        className={styles["area"]}
        bg={"linear-gradient(125deg, #feaa26, #e04c6e);"}
        w={"100%"}
      ></Box>
    </Box>
  );
};
