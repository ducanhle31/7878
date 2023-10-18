"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "../components/Logo";

export const Footer = () => {
  return (
    <Box
      color={"White"}
      w={"100%"}
      bgSize="cover"
      bgRepeat={"no-repeat"}
      position="relative"
      bg="#002c32db"
    >
      <Image
        alt="Mountains"
        src={"/bg-footer.jpg"}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={"flex-start"}>
            <Logo />
            <Box mt={"30px"} as={Link} href={"#"}>
              Văn phòng tuyển sinh tại AUM Việt Nam
            </Box>
            <Box as={Link} href={"#"}>
              Địa chỉ: Số 116 Trần Vỹ, Phường Mai Dịch, Quận Cầu Giấy, Thành phố
              Hà Nội.
            </Box>{" "}
            <Box as={Link} href={"tel:094.162.8017"}>
              Hotline/zalo: 094.162.8017
            </Box>
            <Box as={Link} href={"aof.com.vn"}>
              Website: aof.com.vn
            </Box>
          </Stack>

          <Stack>
            <Heading fontSize={"24px"} fontWeight={600} textAlign="left" mb={4}>
              Hỗ Trợ
            </Heading>

            <Box as={Link} href={"#"}>
              Trang chủ
            </Box>
            <Box as={Link} href={"/gioi-thieu"}>
              Giới thiệu
            </Box>
            <Box as={Link} href={"#"}>
              Ngành học
            </Box>
            <Box as={Link} href={"/lich-khai-giang"}>
              Lịch khai giảng
            </Box>
            <Box as={Link} href={"/lien-he"}>
              Liên hệ
            </Box>
            <Box as={Link} href={"/tin-tuc"}>
              Tin tức
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <Box as={Link} href={"https://timdoitac.aum.edu.vn/ "}>
              <Image
                width={600}
                height={400}
                src="/doi-tac.jpg"
                alt="Đối-tác"
              />
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box borderTopWidth={1} borderStyle={"solid"} borderColor={"gray.200"}>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ md: "center" }}
          align={{ md: "center" }}
        >
          <Text textAlign="center">© 2023 Copyright by IT AUM</Text>
        </Container>
      </Box>
    </Box>
  );
};
