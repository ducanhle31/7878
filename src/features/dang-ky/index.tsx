import { FormContactLienhe } from "@/components/FormContact";
import {
  Box,
  Container,
  Divider,
  GridItem,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

export const Lienhe = () => {
  return (
    <>
      <Box
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
          bgImage={"/dang-ky-bg.png"}
          zIndex={-1}
          filter="auto"
          brightness="50%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
        ></Box>
        <Container maxW="6xl">
          <SimpleGrid
            gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          >
            <GridItem
              pt={{ base: "100px", md: "128px", lg: "128px" }}
              pb={{ base: "0", md: "70px", lg: "140px" }}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"flex-start"}
              justifyContent={"center"}
            >
              <Box ml={0} display={"flex"}>
                <Divider
                  w={"50px"}
                  pt={"15px"}
                  mr={"20px"}
                  borderColor={"#f5750d"}
                  style={{ borderBottomWidth: "4px" }}
                />
                <Text
                  fontWeight={"500"}
                  textAlign={"left"}
                  fontSize={{ base: "16px", md: "16px", lg: "18px" }}
                  color={"#ffffff"}
                >
                  ĐẠI HỌC TỪ XA – VIỆN TÀI CHÍNH
                </Text>
              </Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={{ base: "26px", md: "26px", lg: "36px" }}
                color={"white"}
              >
                ĐĂNG KÝ TƯ VẤN MIỄN PHÍ & NHẬN LỘ TRÌNH HỌC TẬP NHANH CHÓNG
              </Text>
              <UnorderedList
                mt="20px"
                fontSize={{ base: "14px", md: "16px", lg: "16px" }}
                color="white"
                spacing="15px"
              >
                <ListItem>
                  Chương trình do Học Viện Tài Chính đào tạo và cấp bằng, được
                  Bộ GD&ĐT công nhận
                </ListItem>
                <ListItem>
                  Thời gian học nhanh, tiết kiệm chi phí. Học 100% Online mọi
                  lúc mọi nơi
                </ListItem>
                <ListItem>
                  Chỉ xét tuyển hồ sơ đầu vào. Không phải thi tuyển
                </ListItem>
              </UnorderedList>
            </GridItem>
            <GridItem
              pt={{ base: "50px", md: "128px", lg: "128px" }}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection={"column"}
              pb={{ base: "50px", lg: "140px" }}
            >
              <FormContactLienhe />
            </GridItem>
          </SimpleGrid>
        </Container>
      </Box>
    </>
  );
};
