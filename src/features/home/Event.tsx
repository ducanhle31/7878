"use client";

import { Loading } from "@/components/Loading";
import {
  Box,
  Container,
  Divider,
  GridItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSize } from "../../hooks/useSizeWindow";
import Image from "next/image";

const SLiderPosts = dynamic(
  () => import("../posts/SliderPosts").then((mod) => mod.SLiderPosts),
  {
    loading: () => <Loading />,
  }
);
const Announcement = dynamic(
  () => import("../posts/Announcement").then((mod) => mod.Announcement),
  {
    loading: () => <Loading />,
  }
);

export const Event = () => {
  const { size } = useSize();

  const partners = [
    `/client-01.png`,
    `/client-02.png`,
    `/client-03.png`,
    `/client-04.png`,
    `/client-01.png`,
    `/client-02.png`,
    `/client-03.png`,
    `/client-04.png`,
  ];
  return (
    <Box py={"64px"} marginTop={"-320px"}>
      <Box
        mt={{ base: "20px", lg: "80px" }}
        bg={" rgb(2,3,129)"}
        h={{ base: "500px", lg: "400px" }}
        position={"relative"}
        top={"260px"}
        zIndex={"-1"}
      ></Box>
      <Container maxW={"6xl"} pb={"64px"}>
        <SimpleGrid
          mt={{ base: "-180px", lg: "-90px" }}
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          marginBottom={"35px"}
          px={{ base: "0", md: "70px" }}
        >
          <GridItem>
            <Box display={"flex"}>
              <Divider
                w={"90px"}
                pt={"40px"}
                mr={"20px"}
                borderColor={"#ff7300"}
                style={{ borderBottomWidth: "4px" }}
              />
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={{ base: "3xl", md: "4xl" }}
                color={"#ffffff"}
              >
                Learn something more from our blog
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Text
              textAlign={"left"}
              pt={"12px"}
              lineHeight={"30px"}
              fontWeight={500}
              fontSize={"16px"}
              color={" #8ed1fc"}
              ml={{ base: "0", md: "30px" }}
            >
              Follow our latest news and thoughts which focuses exclusively on
              design, art, vintage, and also work updates.
            </Text>
          </GridItem>
        </SimpleGrid>
        <Suspense fallback={<Loading />}>
          <SLiderPosts />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <Announcement />
        </Suspense>

        <Swiper
          slidesPerView={
            (size.width < 480 && 3) || (size.width < 992 && 4) || 4
          }
          spaceBetween={30}
          modules={[Pagination]}
          className="mySwiper"
          style={{ marginTop: "40px" }}
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              {
                <Image
                  width={200}
                  height={40}
                  src={partner}
                  alt="Đối tác Evstep"
                  style={{ objectFit: "contain", height: "40px" }}
                />
              }
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};
