"use client";
import {
  Box,
  Container,
  Divider,
  GridItem,

  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSize } from "../../hooks/useSizeWindow";
import Image from "next/image";

export const CardTeacher = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  const CardWrapper = styled.div`
    --main-color: #dedede;
    --sub-color: #fe9800;
    --bg-color: #323232;
    --accent-color: #bc8d66;
    position: relative;
    height: 500px;
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    gap: 5px;

    transition: all 0.2s;
    cursor: pointer;

    &:before {
      content: "";
      width: 99%;
      height: 99%;
      background: var(--sub-color);
      position: absolute;
      z-index: -1;
      top: 1px;
      left: 1px;
      transition: all 0.3s;
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 80%);
    }

    .card__wrapper {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .card__img {
      width: 100%;
    }

    .card__title {
      color: var(--main-color);
      font-weight: 900;
      font-size: 25px;
    }
    .Image {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 80%);
      box-shadow: 0px 0px 5px -1.5px #000;
    }
    .card__icon {
      margin-top: -40px;
      transform: translateY(20%) skew(15deg, 0);
      display: flex;
      font-size: 15px;
      width: 100%;
      opacity: 0;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    .card__desc {
      transform: translateY(0%) skew(15deg, 0);
      display: flex;
      font-size: 15px;
      width: 100%;
      opacity: 1;
      transition: transform 0.2s ease, opacity 0.2s ease;
    }
    &:hover {
      &:before {
        transform: rotate(10deg);
        box-shadow: 0px 0px 20px -5px #000;
      }

      .card__icon {
        transform: translateY(10%);
        opacity: 1;
      }
      .card__desc {
        transform: translateY(10%);
        opacity: 0;
      }
    }
  `;
  return (
    <CardWrapper className="card">
      <Image
        className="Image"
        src={image}
        alt={title}
        width={500}
        height={500}
      />
      <Box pos={"absolute"} bottom={"50px"}>
        <Box
          color={"white"}
          rounded={"sm"}
          fontSize={"15px"}
          lineHeight={"63px"}
          p={"0 40px"}
          w={"100%"}
          h={"85px"}
          ml={"10px"}
          transform={"skew(-15deg, 0)"}
          bg={"linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)"}
          transition={"all ease .4s"}
          _hover={{
            background:
              "linear-gradient(135deg,rgb(40,116,252) 0%,rgb(2,3,129) 100%)",
          }}
        >
          <Text className="card__title" transform={"skew( 15deg, 0)"}>
            {title}
          </Text>

          <Text className="card__desc" mt={"-35px"} color={"white"}>
            {desc}
          </Text>
          <Box
            height={"15px"}
            letterSpacing={"5px"}
            className="card__icon"
            color={"white"}
          >
            <FaFacebookF /> <BsTwitter /> <AiFillInstagram />
          </Box>
        </Box>

        <Box className="card__wrapper"></Box>
      </Box>
    </CardWrapper>
  );
};
export const StyledSwiper = styled(Swiper)`
  margin-top: 40px;
  padding: 45px; 

  @media (max-width: 768px) {
    padding: 15px; 
  }
`;
export const ListPerson = () => {
  const { size } = useSize();
  const teachers = [
    {
      title: "Ms Huyền",
      desc: "2 năm ",
      avt: `/teacher.jpg`,
    },
    {
      title: "Ms Huyền ",
      desc: "2 năm ",
      avt: `/teacher.jpg`,
    },
    {
      title: "Ms Huyền ",
      desc: "2 năm ",
      avt: `/teacher.jpg`,
    },
  ];

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        pt={"40px"}
        spacing={"8"}
        gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        marginBottom={"60px"}
      >
        <GridItem>
          <Box display={"flex"}>
            <Divider
              w={"70px"}
              pt={"40px"}
              mr={"20px"}
              borderColor={"#f5750d"}
              style={{ borderBottomWidth: "4px" }}
            />
            <Text
              fontWeight={"bold"}
              textAlign={"left"}
              pt={"12px"}
              fontSize={"36px"}
            >
              We will satisfy you by our servicing plan
            </Text>
          </Box>
        </GridItem>
        <GridItem>
          <Text
            textAlign={"left"}
            pt={"20px"}
            lineHeight={"30px"}
            fontSize={"16px"}
            color={"#4d546b"}
          >
            Our team have designed game changing products, consulted for
            companies as well and become a multinational firm, offering
            solutions Worldwide.
          </Text>
        </GridItem>
      </SimpleGrid>

      <StyledSwiper
        slidesPerView={(size.width < 480 && 1) || (size.width < 992 && 1) || 3}
        spaceBetween={50}
        modules={[Pagination]}
        className="mySwiper"
      >
        {teachers?.map((teacher, index) => (
          <SwiperSlide key={index}>
            <CardTeacher
              key={index}
              title={teacher.title}
              desc={teacher.desc}
              image={teacher.avt}
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
};
