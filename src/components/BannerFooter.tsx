import { FormContactBanner } from "@/components/FormContact";
import {
  AspectRatio,
  Box,
  Divider,
  Flex,
  GridItem,
  Heading,
  Modal,
  ModalContent,
  ModalOverlay,
  SimpleGrid,
  Text,
  useDisclosure,
  Button,
  Grid,
} from "@chakra-ui/react";
import CountUp from "react-countup";
import { AiFillCaretRight } from "react-icons/ai";
import Image from "next/image";

interface ICounter {
  start: number;
  end: number;
  subfix: string;
  prefix?: string;
  image?: string;
  text?: string;
}

interface ModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" h={"506px"} bg={"#ffffff0"}>
        <AspectRatio maxW="900px" h={"506px"} ratio={1}>
          <iframe
            title="naruto"
            src="https://www.youtube.com/embed/FjWX-2wTP0k?si=U0cnZDkIanM1Xlh-"
            allowFullScreen
          />
        </AspectRatio>
      </ModalContent>
    </Modal>
  );
};

export default ModalComponent;

const counters = [
  {
    start: 0,
    end: 3,
    suffix: "Trường được công nhận đạt chuẩn chất lượng giáo dục",
    text: "Top",
    image: "/counter-icon-01.png",
  },
  {
    start: 0,
    end: 1000,
    suffix: "Học viên theo học Hệ từ xa năm 2023 ",
    image: "/counter-icon-02.png",
    text: "+",
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
          {image ? (
            <Image
              width={48}
              height={48}
              src={image}
              alt="Dan "
              style={{ width: "48px", height: "48px", objectFit: "cover" }}
            />
          ) : null}
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      bgColor="white"
      boxShadow={
        "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      }
      zIndex={"1"}
      px={{ base: "20px", lg: "128px" }}
      mt="-132px"
    >
      <SimpleGrid
        pt={"50px"}
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
            khối ngành kinh tế sẽ là bệ phóng giúp các bạn sinh viên chinh phục
            nhiều cơ hội học tập và việc làm hấp dẫn trong tương lai
          </Text>

          <Grid
            mt="30px"
            align-items="center"
            templateColumns="repeat(5, 1fr)"
            gap={4}
          >
            <GridItem colSpan={1}>
              <Button
                w="60px"
                h="60px"
                borderRadius="50%"
                onClick={onOpen}
                bg="linear-gradient(to bottom, #f5750d, #f7c42a)"
                color="white"
                _hover={{
                  bg: "linear-gradient(to bottom, #f7c42a, #f5750d)",
                }}
              >
                <AiFillCaretRight fontSize="18px" />
              </Button>
            </GridItem>
            <GridItem colSpan={4}>
              <Image
                width={498}
                height={101}
                src="/logo-aof.png"
                alt="Dan "
                style={{ objectFit: "cover" }}
              />
            </GridItem>
          </Grid>
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

      <ModalComponent isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};
