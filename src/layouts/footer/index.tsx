"use client";

import { FormPoup } from "@/components/FormContact";
import { ModalBase } from "@/components/Modal";
import {
  Box,
  Circle,
  Container,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { InputRes } from "../../components/InputRes";
import { Logo } from "../components/Logo";

export const Footer = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <Box bg={"#00165a"} color={"White"}>
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
            <Box as={Link} href={"dec.hvtc.edu.vn"}>
              Website: dec.hvtc.edu.vn
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading fontSize={"24px"} fontWeight={600} textAlign="left" mb={4}>
              Hỗ Trợ
            </Heading>

            <Box as={Link} href={"#"}>
              Trang chủ
            </Box>
            <Box as={Link} href={"/gioi-thieu"}>
              Giới thiệu
            </Box>
            <Box as="a" href={"#"}>
              Ngành học
            </Box>
            <Box as="a" href={"/lich-khai-giang"}>
              Lịch khai giảng
            </Box>
            <Box as="a" href={"/lien-he"}>
              Liên hệ
            </Box>
            <Box as="a" href={"/tin-tuc"}>
              Tin tức
            </Box>
          </Stack>

          <Stack align={"flex-start"}>
            <Flex
              justify="left"
              alignItems={"flex-start"}
              direction="column"
              mb="32px"
            >
              <Heading
                fontSize={"24px"}
                fontWeight={600}
                textAlign="left"
                mb={4}
              >
                Đăng ký nhận bản tin
              </Heading>
              <Flex
                mt={"8px"}
                flexDirection={"column"}
                justifyContent={"center"}
                bg={"#011143"}
                h={"250px"}
                px={"40px"}
              >
                <Text fontSize={"14px"} lineHeight={"24px"}>
                Liên hệ với chúng tôi
                </Text>
                <Box maxW="md" pt={"21px"}>
                  <InputRes
                    placeholder="Nhập email"
                    label="Đăng ký"
                    onClick={onToggle}
                  />
                </Box>
                <HStack justify="left" pt={"28px"}>
                  <Circle size="30px" bg="white" color="#3a589d">
                    <BiLogoFacebook />
                  </Circle>
                  <Circle size="30px" bg=" white" color="#3b6994">
                    <FaInstagram />
                  </Circle>
                  <Circle size="30px" bg=" white" color="red">
                    <AiOutlineGooglePlus />
                  </Circle>{" "}
                  <Circle size="30px" bg=" white" color="#0072b7">
                    <AiFillLinkedin />
                  </Circle>
                </HStack>
              </Flex>
            </Flex>
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
      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormPoup title="Để lại thông tin" />
      </ModalBase>
    </Box>
  );
};
