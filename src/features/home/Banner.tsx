import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

export const CardTeacher = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  const CardWrapper = styled.div`
    .card {
      background-position: center;
      background-size: cover;
    }

    .Image {
      display: block;
      width: 100%;
    }
  `;
  return (
    <CardWrapper className="card">
      <Container maxW="8xl">
        <Flex
          ml={{ base: -2 }}
          mt={"-30px"}
          display={{ base: "block", lg: "none" }}
        >
          <Box>
            <Image
              className="Image"
              src={image}
              alt={title}
              width={"100%"}
              height={500}
            />
          </Box>
          <Box pos={"absolute"}>
            <Text
              ml={"20px"}
              mt={"-280px"}
              fontWeight={"700"}
              color={"white"}
              fontSize={"24px"}
              lineHeight={"30px"}
              textShadow={"3px 3px 7px rgba(64,28,17,0.66)"}
            >
              {title}
            </Text>
          </Box>
        </Flex>

        <Flex
          display={{ base: "none", lg: "block" }}
          flexDirection={"column-reverse"}
        >
          <Grid templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem
              h={"602px"}
              w={"130%"}
              colSpan={4}
              bg="linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);"
              style={{
                clipPath: "polygon(0 0, 100% 0%, 68% 100%, 0% 100%)",
              }}
            >
              <Text
                ml={"128px"}
                mt={"108px"}
                fontWeight={"700"}
                color={"white"}
                fontSize={"48px"}
                textShadow={"3px 3px 7px rgba(64,28,17,0.66)"}
              >
                {title}
              </Text>
            </GridItem>
            <GridItem
              colSpan={8}
              style={{
                clipPath: "polygon(20% 0, 100% 0%, 100% 100%, 0% 100%)",
              }}
            >
              <Image
                className="Image"
                src={image}
                alt={title}
                width={"100%"}
                height={500}
              />
            </GridItem>
          </Grid>

          <Flex h={"50px"} justifyContent={"flex-end"}></Flex>
          <Flex justifyContent={"flex-end"}>
            <Box
              w={"96%"}
              h={"127px"}
              top={"-175px"}
              pos={"relative"}
              bg={"white"}
              style={{
                clipPath: "polygon(5% 0, 100% 0%, 100% 100%, 0% 100%)",
              }}
            ></Box>
          </Flex>
        </Flex>
      </Container>
    </CardWrapper>
  );
};
export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const NavButtonsContainer = styled.div`
    position: relative;
    z-index: 200000;
    top: -380px;
    right: 170px;
    display: flex;
    justify-content: right;
    margin-top: 50px;
    padding-bottom: 30px;
    @media (max-width: 768px) {
      top: -120px;
      right: 20px;
    }
  `;
  const NavButton = styled.button`
    display: flex;
    width: 53px;
    height: 53px;
    border: none;
    outline: none;
    border-radius: 100px;
    background-color: hsl(0, 0%, 100%);
    color: #000000;
    margin: 0px 0.5rem;
    box-shadow: 0px 0px 15px 12px rgba(196, 196, 196, 0.6);
    transition: all 0.5s;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    &:hover {
      background-color: hsl(
        40.08298755186722,
        96.7871485943775%,
        48.82352941176471%
      );
      cursor: pointer;
      color: #ffffff;
    }
  `;
  return (
    <NavButtonsContainer className="swiper-nav-btns">
      <NavButton onClick={() => swiper.slideNext()}>
        {" "}
        <RiArrowLeftSLine />
      </NavButton>
      <NavButton onClick={() => swiper.slidePrev()}>
        <RiArrowRightSLine />
      </NavButton>
    </NavButtonsContainer>
  );
};
export const Banner = () => {
  const teachers = [
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023   ",
      avt: `/OIP.jfif`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/OIP (2).jfif`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/OIP (1).jfif`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/hvtc.jpg`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/market-2494520_640.jpg`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/video.jpg`,
    },
  ];

  return (
    <Box pt={{ base: "100px", md: "0" }}>
      <Box pos={"relative"}>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectFade, Navigation]}
          className="mySwiper"
        >
          {teachers?.map((teacher, index) => (
            <SwiperSlide key={index} className="swiperSlide">
              <CardTeacher
                key={index}
                title={teacher.title}
                image={teacher.avt}
              />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </Box>
    </Box>
  );
};
