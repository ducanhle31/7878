import { useSize } from "@/hooks/useSizeWindow";
import {
  Box,
  Container,
  Divider,
  GridItem,
  Heading,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

import { AiFillStar } from "react-icons/ai";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
SwiperCore.use([Navigation, Autoplay]);

export const CardTeacher = ({
  title,
  desc,
  image,
}: {
  title: string;
  desc: string;
  image: string;
}) => {
  const CardContainer = styled.div`
    position: relative;
    width: 270px;
    height: 330px;

    border-radius: 16px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #18295c;
    background-color: #18295c;
    color: #18295c;
    &:hover {
      height: 360px;
      transition: all 0.6s ease;
      .t {
        box-shadow: 0px 0px 0px 5px rgba(252, 185, 0, 1);
        transition: opacity 0.3s ease;
      }
      .stars {
        opacity: 1;
      }
    }
  `;

  const ImgNameContainer = styled.div`
    width: 100%;
    height: 210px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -45px;
  `;

  const Image = styled.img`
    display: block;
    width: 85px;
    height: 85px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 70px;
    box-shadow: 0px 0px 0px 5px;
    object-fit: cover;
  `;

  const Name = styled.h2`
    text-align: center;
    padding: 16px;
    font-size: 14px;
    line-height: 26px;
    color: #bccbfb;
  `;
  const StarsContainer = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    opacity: 0; /* Hidden by default */
    transition: opacity 0.3s ease;
    font-size: 24px;
    color: yellow;
    margin-top: 15px;
  `;
  return (
    <Box
      height={{ base: "800px", lg: "600px" }}
      pt={{ base: "500px", lg: "330px" }}
      pb={"60px"}
    >
      <CardContainer>
        <ImgNameContainer>
          <Image src={image} alt="" width={85} height={85} className="t" />
          <Name>{desc}</Name>
          <Heading size="md" color={"white"} textAlign={"center"}>
            {title}
          </Heading>
          <StarsContainer className="stars">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </StarsContainer>
        </ImgNameContainer>
      </CardContainer>
    </Box>
  );
};

export const StyledSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  background-size: cover;
  width: 300px;
`;

export const SwiperNavButtons = () => {
  const swiper = useSwiper();
  const NavButtonsContainer = styled.div`
    position: relative;
    z-index: 10;
    top: -500px;
    display: flex;
    justify-content: right;
    margin-top: 50px;
    right: inherit;
    padding-bottom: 30px;
    @media (max-width: 768px) {
      top: -470px;
      justify-content: center;
    }
  `;
  const NavButton = styled.button`
    display: flex;
    width: 40px;
    height: 40px;
    border: none;
    outline: none;
    border-radius: 100px;
    background-color: hsl(0, 0%, 100%);
    color: #000000;
    margin: 0px 1rem;
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
export const Testi = () => {
  const { size } = useSize();

  const teachers = [
    {
      title: "Trần Vân Anh ",
      desc: " Mình đã từng tốt nghiệp hệ chính quy, vì thế đây là cơ hội để được trải nghiệm thêm một cách thức học mới. Mình rất vui khi học tập cùng các bạn và anh chị đang đi làm nên học hỏi được rất nhiều điều bổ ích",
      avt: `/testi-02.JPG`,
    },
    {
      title: "Nguyễn Thanh Huệ ",
      desc: "Mình học ngành Kế toán e-Learning tại AOF. Trước đây mình đã học Cao đẳng kế toán. Hệ từ xa rất phù hợp với bản thân mình, khi mà mình phải đi làm ban ngày và chỉ sắp xếp thời gian học được buổi tối",
      avt: `/testi-03.JPG`,
    },
    {
      title: "Nguyễn Quang Trường  ",
      desc: "Nhà trường đã áp dụng khoa học kỹ thuật, phần mềm giáo dục để hỗ trợ trong công tác giảng dạy, đó là bước tiến lớn của xã hội và là xu hướng giáo dục toàn cầu. Tôi tiết kiệm được khá nhiều thời gian và chi phí khi tham gia chương trình học tập này",
      avt: `/testi-01.jpg`,
    },
    {
      title: "Nguyễn Thái Học",
      desc: "Mình công nhận giáo trình và cách dạy ở đây rất hay, bài bản, dễ nhớ. Kiến thức thực tế hữu ích, cách học linh động giúp mình dễ dàng sắp xếp thời gian dành cho công việc và gia đình",
      avt: `/testi-04.jpg`,
    },
    {
      title: "Trần Vân Anh ",
      desc: " Mình đã từng tốt nghiệp hệ chính quy, vì thế đây là cơ hội để được trải nghiệm thêm một cách thức học mới. Mình rất vui khi học tập cùng các bạn và anh chị đang đi làm nên học hỏi được rất nhiều điều bổ ích",
      avt: `/testi-02.JPG`,
    },
    {
      title: "Nguyễn Thanh Huệ ",
      desc: "Mình học ngành Kế toán e-Learning tại AOF. Trước đây mình đã học Cao đẳng kế toán. Hệ từ xa rất phù hợp với bản thân mình, khi mà mình phải đi làm ban ngày và chỉ sắp xếp thời gian học được buổi tối",
      avt: `/testi-03.JPG`,
    },
    {
      title: "Nguyễn Quang Trường  ",
      desc: "Nhà trường đã áp dụng khoa học kỹ thuật, phần mềm giáo dục để hỗ trợ trong công tác giảng dạy, đó là bước tiến lớn của xã hội và là xu hướng giáo dục toàn cầu. Tôi tiết kiệm được khá nhiều thời gian và chi phí khi tham gia chương trình học tập này",
      avt: `/testi-01.jpg`,
    },
    {
      title: "Nguyễn Thái Học",
      desc: "Mình công nhận giáo trình và cách dạy ở đây rất hay, bài bản, dễ nhớ. Kiến thức thực tế hữu ích, cách học linh động giúp mình dễ dàng sắp xếp thời gian dành cho công việc và gia đình",
      avt: `/testi-04.jpg`,
    },
  ];

  return (
    <Box bg={"#007180"}>
      <Container
        maxW={"6xl"}
        backgroundImage={"/maptesti.png"}
        bgRepeat="no-repeat"
        backgroundPosition="center"
      >
        <SimpleGrid
          pos={"absolute"}
          pt={"80px"}
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          marginBottom={"60px"}
        >
          <GridItem>
            <Box display={"flex"} top={"0"}>
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
                fontSize={"36px"}
                color={"#f5750d"}
              >
                Sinh viên nói gì về Hệ từ xa của Học viện Tài chính?
              </Text>
            </Box>
            <Text
              pr="10px"
              fontSize={"18px"}
              color="white"
              textAlign={{ base: "center", lg: "right" }}
            >
              Hãy lắng nghe cảm nhận của các bạn sinh viên
            </Text>
          </GridItem>
        </SimpleGrid>

        <Swiper
          autoplay={{ delay: 2500 }}
          loop={true}
          slidesPerView={
            size.width < 768
              ? 1
              : size.width < 992
              ? 2
              : size.width < 1280
              ? 3
              : size.width < 1536
              ? 4
              : 4
          }
          modules={[Navigation, Autoplay]}
        >
          {teachers?.map((teacher, index) => (
            <StyledSwiperSlide key={index}>
              <CardTeacher
                title={teacher.title}
                desc={teacher.desc}
                image={teacher.avt}
              />
            </StyledSwiperSlide>
          ))}

          <SwiperNavButtons />
        </Swiper>

        <Box
          mt={"15px"}
          pb={"80px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text color={"#b4c3f3"}>
            Don’t think so more about success rate.
            <Link color="#f7c42a" href="#" _hover={{ color: "#fe9800" }}>
              Let’s get started
            </Link>
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
