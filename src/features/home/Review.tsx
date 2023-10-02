"use client";

import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Testimonial = (props: Props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

const TestimonialContent = (props: Props) => {
  const { children } = props;

  return (
    <Stack pl={"30px"} pr={"30px"} align={"center"}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = (props: Props) => {
  const { children } = props;

  return (
    <Heading
      mt={"18px"}
      fontFamily={"Roboto Condensed"}
      as={"h3"}
      fontSize={"16px"}
      fontWeight={700}
      textAlign={"center"}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = (props: Props) => {
  const { children } = props;

  return (
    <Text
      mt={"8px"}
      textAlign={"center"}
      color={"#282828"}
      fontSize={"sm"}
      fontFamily={"Montserrat"}
    >
      {children}
    </Text>
  );
};

export const Review = () => {
  return (
    <Box
      style={{
        clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0 95%)",
      }}
    >
      <Container pb={"90px"} maxW={"6xl"} pt={"36px"} as={Stack} spacing={12}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Text
            textAlign={"center"}
            fontWeight={700}
            fontSize={"32px"}
            color={"#111111"}
            fontFamily={"Roboto Condensed"}
          >
            CAM KẾT
          </Text>
          <Divider
            mt={"10px"}
            borderColor={useColorModeValue("#777", "#FFF")}
            w={"80px"}
            borderWidth={3}
            borderRadius={"50px"}
          />
          <Text
            fontFamily={"Montserrat"}
            color={"#282828"}
            mt={"16px"}
            textAlign={"center"}
            maxWidth={"420px"}
          >
            Kết thúc khóa học, học viên sẽ nắm được quy trình xây dựng thương
            hiệu và phát triển bền vững cho doanh nghiệp của mình.
          </Text>
        </Box>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"60px"}>
          <Testimonial>
            <TestimonialContent>
              <Image
                alt={"feature image"}
                src={"/ck-1.png"}
                width={"102px"}
                height={"106px"}
              />
              <TestimonialHeading>
                HỆ THỐNG BÀI GIẢNG TỐI ƯU HÓA
              </TestimonialHeading>
              <TestimonialText>
                Hệ thống bài giảng ngắn gọn, dễ hiểu, tối ưu hóa qua các bài
                giảng.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <Image
                alt={"feature image"}
                src={"/ck-2.png"}
                width={"102px"}
                height={"106px"}
              />
              <TestimonialHeading>
                PHƯƠNG PHÁP GIẢNG DẠY ĐỔI MỚI
              </TestimonialHeading>
              <TestimonialText>
                Học viên được giải đáp mọi thắc mắc một cách nhanh nhất ngay
                trong khóa học.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <Image
                alt={"feature image"}
                src={"/ck-3.png"}
                width={"102px"}
                height={"106px"}
              />
              <TestimonialHeading>CAM KẾT CHẤT LƯỢNG</TestimonialHeading>
              <TestimonialText>
                100% Các học viên được hỗ trợ trực tiếp từ diễn giả. Cam kết
                100% học viên hiểu rõ hành vi khách hàng trực tuyến. 100% học
                viên biết cách phối hợp các công cụ Digital Marketing, đo lường
                hiệu quả.
              </TestimonialText>
            </TestimonialContent>
          </Testimonial>
        </SimpleGrid>
      </Container>
    </Box>
  );
};
