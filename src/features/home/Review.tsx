import { useSize } from "@/hooks/useSizeWindow";
import { Box, Button, Container, Text } from "@chakra-ui/react";
import styled from "@emotion/styled";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

export const Item = ({
  name,
  label,
  content,
  title,
  image,
  height,
}: {
  name: string;
  label: string;
  content: string;
  title: string;
  image: string;
  height: string;
}) => {
  const HoverContainer = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    &:hover .Caption {
      opacity: 1;
      top: 80%;
    }

    &:hover .Image {
      transform: scale(1.2);
    }
  `;

  const Image = styled.img`
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
  `;

  const Caption = styled.div`
    position: absolute;
    top: 70%;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, top 0.3s ease-in-out;
  `;

  return (
    <HoverContainer style={{ height: `${height}` }}>
      <Image
        className="Image"
        src={image}
        alt={name}
        width={400}
        height={400}
      />
      <Caption className="Caption">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          bgPosition="center"
        >
          <Button
            color={"white"}
            size={"2xl"}
            rounded={"sm"}
            fontSize={"15px"}
            lineHeight={"63px"}
            p={"0 40px"}
            bg={"linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)"}
            transition={"all ease .4s"}
            _hover={{
              background:
                "linear-gradient(135deg,rgb(40,116,252) 0%,rgb(2,3,129) 100%)",
            }}
          >
            <Text>{name}</Text>
          </Button>
        </Box>
      </Caption>
    </HoverContainer>
  );
};
const reviews = [
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
    height: "500px",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
    height: "400px",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
    height: "500px",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
    height: "400px",
  },
  {
    name: "Nguyễn Văn A",
    label: "Học sinh khóa X",
    image: `/student.jpg`,
    title:
      "Học Viên Ms Hoa Junior cơ sở Phan Văn Trị, TPHCM xuất sắc đạt 13 - 15 khiên Cambridge",
    content:
      "Các em học viên tại Ms Hoa Junior cơ sở 672A47 Đường Phan Văn Trị, Phường 10, Quận Gò Vấp, TPHCM chinh phục chứng chỉ Cambridge một cách xuất sắc. Các con đã luôn cố gắng học tập, rèn luyện tiếng Anh chăm chỉ để có được kết quả này, cô xin chúc mừng các con nhé!",
    height: "500px",
  },
];

export const StyledSwiper = styled(Swiper)`
  width: min(80%, 800px);
  background-color: transparent;
`;

export const Review = () => {
  const { size } = useSize();

  return (
    <Box py={"62px"}>
      <Container maxW="9xl" overflow={"hidden"}>
        <Swiper
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
          spaceBetween={30}
          className="mySwiper"
        >
          {reviews?.map((review, index) => (
            <SwiperSlide key={index}>
              <Item
                name={review.name}
                label={review.label}
                content={review.content}
                title={review.title}
                image={review.image}
                height={review.height}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};
