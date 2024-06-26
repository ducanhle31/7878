"use client";

import { FormMain } from "@/components/FormContact";
import { categotys } from "@/features/home/Categorys";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  List,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { BiLogoTiktok } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaYoutube } from "react-icons/fa";

export const Item = ({
  path,
  image,
  title,
}: {
  path: string;
  image: string;
  title: string;
}) => {
  return (
    <Box
      as={Link}
      href={path || "/"}
      pos="relative"
      transition={"all ease .4s"}
      _hover={{ transform: "translateY(-10px)" }}
    >
      <Image
        priority
        width={700}
        height={400}
        src={image}
        alt={title}
        style={{
          maxHeight: "78px",
          filter: "brightness(50%)",
          objectFit: "cover",
        }}
      />
      <List
        as={Flex}
        pos={"absolute"}
        top={0}
        left={"10%"}
        bottom={0}
        align={"center"}
        color={"white"}
      >
        <Heading as={"h2"} size={"md"} textAlign={"left"}>
          {title}
        </Heading>
      </List>
    </Box>
  );
};

export const Sidebar = ({ sticky }: { sticky?: string }) => {
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-main`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href]);
  return (
    <Box pos={sticky ? "sticky" : "static"} top={sticky}>
      <Box>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Các ngành đào tạo
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} gap={"20px"}>
          {categotys.map((cat, index) => (
            <Item
              key={index}
              path={cat.path}
              title={cat.title}
              image={`${cat.image}`}
            />
          ))}
        </SimpleGrid>
      </Box>

      <Box pt={"32px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Mạng xã hội
        </Heading>
        <Box
          rounded={"sm"}
          p="24px"
          border={"1px solid"}
          borderColor={"gray.300"}
        >
          <VStack spacing={"16px"}>
            <Button
              leftIcon={<FaFacebook />}
              colorScheme="facebook"
              w={"full"}
              as={Link}
              href={"https://www.facebook.com/cunhantructuyenhvtc/"}
            >
              Fanpage
            </Button>

            <Button
              leftIcon={<FaYoutube />}
              colorScheme="red"
              w={"full"}
              as={Link}
              href={
                "https://www.youtube.com/@aihoctuxahocvientaichinh-a910/featured "
              }
            >
              Youtube
            </Button>

            <Button
              leftIcon={<BiLogoTiktok />}
              bg="blackAlpha.800"
              w={"full"}
              color={"whiteAlpha.800"}
              as={Link}
              href={
                "https://www.tiktok.com/@tuyensinhaof?is_from_webapp=1&sender_device=pc"
              }
            >
              Tiktok
            </Button>
            <VStack pt={"24px"} w={"full"}>
              <Text>Liên hệ trực tiếp</Text>
              <Button
                leftIcon={<BsFillTelephoneFill />}
                variant={"link"}
                color={"red.600"}
                w={"full"}
              >
                <Link href="tel: 094.162.8017">094.162.8017</Link>
              </Button>
            </VStack>
          </VStack>
        </Box>
      </Box>

      <Box pt={"24px"}>
        <Heading
          as={"h3"}
          size={"md"}
          pb={"20px"}
          textAlign={{ base: "center", lg: "start" }}
        >
          Đăng ký tư vấn
        </Heading>
        <FormMain id={id} href={href} />
      </Box>
    </Box>
  );
};
