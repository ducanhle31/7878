import { BoxTest } from "@/components/BoxTest";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

export const LichKg = () => {
  return (
    <>
        <Box
        w={"100%"}
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
          bgImage="/bg-gt.jpg"
          zIndex={-1}
          filter="auto"
          brightness="40%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPosition={"0px"}
        ></Box>
          <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            fontSize={{ base: "36px", lg: "40px" }}
            fontWeight={700}
            mt="75px"
            color={"white"}
          >
            ĐẠI HỌC TỪ XA – HỌC VIỆN TÀI CHÍNH
          </Heading>
          <Text
            mt={"18px"}
            fontSize={"16px"}
            textAlign={"center"}
            color={"white"}
            pb="60px"
          >
            Chất lượng – uy tín – hiệu quả- chuyên nghiệp – và hiện đại
          </Text>
        </Container>
      </Box>
    

      <BoxTest />
    </>
  );
};
