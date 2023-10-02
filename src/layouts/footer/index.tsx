"use client";

import {
  Box,
  Image,
  Text,
  useDisclosure,
  HStack,
  Circle,
  Square,
} from "@chakra-ui/react";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export const Footer = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();
  return (
    <>
      <Box w={"100%"} height={"264px"}>
        <Image
          alt={"feature image"}
          src={"/bg-black.jpg"}
          width={"100%"}
          height={264}
        />
        <Box pos={"relative"} top={"-204px"} textAlign="center">
          <HStack justify="center" mb={"15px"}>
            <Circle size="30px" bg="#3a589d" color="white">
              <BiLogoFacebook />
            </Circle>
            <Circle size="30px" bg="#3b6994" color="white">
              <FaInstagram />
            </Circle>
            <Circle size="30px" bg="#dd4e31" color="white">
              <AiOutlineGooglePlus />
            </Circle>{" "}
            <Circle size="30px" bg="#0072b7" color="white">
              <AiFillLinkedin />
            </Circle>
          </HStack>
          <Box color={"#f1f1f1"} fontSize={"14px"}>
            <Text mb={"8px"}>Eagle Media – Thiết kế web chuyên nghiệp</Text>
            <Text mb={"8px"}>
              Trụ Sở Tại chính: 115 Phạm Văn Đồng – P. Vỹ Dạ – TP Huế
            </Text>
            <Text mb={"8px"}>Hotline: 0234 3939 369</Text>
            <Text mb={"8px"}>Email: Info@eaglemedia.vn</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};
