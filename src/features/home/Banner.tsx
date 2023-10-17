import { Box, Container} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { BannerFooter } from "@/components/BannerFooter";
import Image from "next/image";

export const CardTeacher = ({
  title,
  image,
}: {
  title: string;
  image: string;
}) => {
  return (
    <Image
      className="Image"
      src={image}
      alt={title}
      width={8000}
      height={3250}
      style={{width: "100%", height: "auto"}}
    />
  );
};
export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const NavButtonsContainer = styled.div`
    position: relative;
    z-index: 20000;
    top: -80px;
    right: 6%;
    display: flex;
    justify-content: right;
    margin-top: 50px;
    padding-bottom: 30px;
    @media (max-width: 768px) {
      top: -70px;
      right: 2%;
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
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
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
      avt: `/eAOF-01.png`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/eAOF-02.png`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/eAOF-03.png`,
    },
    {
      title: "ĐẠI HỌC TỪ XA HỌC VIỆN TÀI CHÍNH TUYỂN SINH 2023",
      avt: `/eAOF-05.png`,
    },
  ];

  return (
    <Box pt={{ base: "100px", md: "0" }}>
      <Container maxW="8xl" mt={{ base: "5px", md: "100px", lg: "0" }}>
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
        <BannerFooter/>
      </Container>
    </Box>
  );
};
