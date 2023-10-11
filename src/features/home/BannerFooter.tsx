import { FormContactBanner } from "@/components/FormContact";
import {
  Box,
  Container,
  Divider,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import CountUp from "react-countup";
interface ICounter {
  start: number;
  end: number;
  subfix: string;
  prefix?: string;
  image?: string;
  text?: string;
}

const counters = [
  {
    start: 0,
    end: 3,
    suffix: "trường ĐH đạt chuẩn chất lượng giáo dục ",
    text: "Top",
    image: "/counter-icon-01.png",
  },
  {
    start: 0,
    end: 1000,
    suffix: "Học viên theo học Hệ từ xa năm 2023 ",
    image: "/counter-icon-02.png",
    prefix: "+",
  },
  {
    start: 0,
    end: 15,
    suffix: "Huân chương cao quý của Đảng và Nhà nước ",
    image: "/counter-icon-03.png",
    prefix: "+",
  },
];

export const Counter = (props: ICounter) => {
  const { start, end, subfix, image, prefix, text } = props;

  return (
    <CountUp
      enableScrollSpy={true}
      end={end}
      start={start}
      duration={2}
      suffix={prefix}
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef }) => (
        <Flex alignItems={"center"} pt={"20px"}>
          <Image w={"48px"} h={"48px"} src={image} alt="Dan Abramov" />
          <Flex
            pl={"15px"}
            justifyContent={"center"}
            flexDir="column"
            alignItems={"flex-start"}
          >
            <Box>
              <span
                style={{
                  fontSize: "36px",
                  textAlign: "left",
                  fontWeight: "600",
                  color: "red",
                }}
              >
                {text}
              </span>
              <span
                style={{
                  fontSize: "36px",
                  textAlign: "left",
                  fontWeight: "600",
                  color: "red",
                }}
                ref={countUpRef}
              />
            </Box>

            <Heading fontSize="14px" fontWeight={500} color="red">
              {subfix}
            </Heading>
          </Flex>
        </Flex>
      )}
    </CountUp>
  );
};

export const BannerFooter = () => {
  return (
    <Box
      pt={{ base: "290px", md: "290px", lg: "0" }}
      mx={{ base: "0", lg: "53px" }}
    >
      <Container
        bgColor="white"
        position={"relative"}
        maxW="8xl"
        zIndex={"1"}
        boxShadow="0px 89px 72px 47px rgba(113, 113, 113, 0.75);"
        mt={"-400px"}
        px={{ base: "20px", lg: "128px" }}
        style={{
          clipPath:
            "polygon(8% 0, 100% 0, 100% 43%, 100% 100%, 68% 100%, 32% 100%, 0 100%, 0 19%, 4% 19%)",
        }}
      >
        <SimpleGrid
          pt={"20px"}
          templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(20, 1fr)" }}
        >
          <GridItem w="100%" colSpan={7} mb={"71px"}>
            <Box display={"flex"}>
              <Divider
                w={"70px"}
                pt={"20px"}
                mr={"20px"}
                borderColor={"#f5750d"}
                style={{ borderBottomWidth: "4px" }}
              />
              <Text
                fontWeight={700}
                textAlign={"left"}
                fontSize={"24px"}
                color={"#00165a"}
              >
                Những con số ấn tượng về Học Viện Tài Chính
              </Text>
            </Box>
            <Text
              textAlign={"left"}
              pt={"20px"}
              lineHeight={"30px"}
              fontSize={"18px"}
              color={"#4d546b"}
            >
              Chọn HỆ TỪ XA Học Viện Tài Chính – Trường đại học TOP ĐẦU đào tạo
              khối ngành kinh tế sẽ là bệ phóng giúp các bạn sinh viên chinh
              phục nhiều cơ hội học tập và việc làm hấp dẫn trong tương lai
            </Text>
          </GridItem>
          <GridItem
            w="100%"
            colSpan={6}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-evenly"}
            pl={"40px"}
            mt="-65px"
            mb={"40px"}
          >
            {counters?.map((counter, index) => (
              <Counter
                key={index}
                start={counter.start}
                end={counter.end}
                subfix={counter.suffix}
                prefix={counter.prefix}
                image={counter.image}
                text={counter.text}
              />
            ))}
          </GridItem>
          <GridItem mt="-20px" w="100%" mb="0px" colSpan={7}>
            <FormContactBanner />
          </GridItem>
        </SimpleGrid>
      </Container>
      <Box
        display={{ base: "none", md: "none", lg: "hidden" }}
        pos="absolute"
        zIndex={"-1"}
        top={"50px"}
        right="0"
        w="77%"
        h="1200px"
        bgImage={
          "linear-gradient(135deg,rgb(0, 0, 105) 0%,rgb(9, 71, 179) 100%);"
        }
        style={{
          clipPath: "polygon(36% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {" "}
      </Box>
      <Box
        display={{ base: "none", md: "none", lg: "hidden" }}
        pos="absolute"
        zIndex={"-1"}
        top={"50px"}
        right="0"
        w="77%"
        h="1200px"
        bgImage={"./bg-pricing-03.png"}
        backgroundPosition="center bottom"
        backgroundRepeat="no-repeat"
        style={{
          clipPath: "polygon(36% 0, 100% 0, 100% 100%, 0% 100%)",
        }}
      >
        {" "}
      </Box>
    </Box>
  );
};
