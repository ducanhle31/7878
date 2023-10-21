import { FormGetFly1 } from "@/components/FormContact";
import { Loading } from "@/components/Loading";
import { ModalBase } from "@/components/Modal";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  List,
  SimpleGrid,
  Text,
  useDisclosure,Grid 
} from "@chakra-ui/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const Timer = () => {
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState<number>(0);
  const [hr, setHr] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);

  useEffect(() => {
    const getLichKg = async () => {
      try {
        const res = await fetch("/api/data-lichKg");
        const data = await res.json();
        const newList: string[] = data?.list || [];
        const dateString = newList.find((item) => {
          const datePattern = /(\d{2})\/(\d{2})\/(\d{4})/;
          return datePattern.test(item);
        });

        if (dateString) {
          const matchArray = dateString.match(/(\d{2})\/(\d{2})\/(\d{4})/);
          const [, day, month, year] = matchArray ? matchArray : [];
          const formattedDate = `${year}-${month}-${day}T00:00:00.000Z`;
          const newTargetDate: Date = new Date(formattedDate);

          const intervalId = setInterval(() => {
            const currentDate: Date = new Date();
            const timeDifference: number =
              newTargetDate.getTime() - currentDate.getTime();

            if (timeDifference <= 0) {
              clearInterval(intervalId);
              setDays(0);
              setHr(0);
              setMin(0);
              setSec(0);
              setLoading(false);
            } else {
              const remainingSeconds: number = Math.floor(
                timeDifference / 1000
              );
              const remainingMinutes: number = Math.floor(
                remainingSeconds / 60
              );
              const remainingHours: number = Math.floor(remainingMinutes / 60);

              setDays(Math.floor(remainingHours / 24));
              setHr(remainingHours % 24);
              setMin(remainingMinutes % 60);
              setSec(remainingSeconds % 60);
              setLoading(false);
            }
          }, 1000);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getLichKg();
  }, []);

  if (loading) {
    return (
      <Grid placeItems={"center"} height={"40vh"}>
        Dữ liệu đang được chúng tôi cập nhập
      </Grid>
    );
  }
  return (
    <List
      display="flex"
      pt="10px"
      fontSize="26px"
      fontWeight="700"
      textAlign="center"
      color="red"
    >
      <Box pr="20px">
        <Text>{days}</Text>
        <Text>Ngày</Text>
      </Box>
      <Box pr="20px">
        <Text>{hr}</Text>
        <Text>Giờ</Text>
      </Box>
      <Box pr="20px">
        <Text>{min}</Text>
        <Text>Phút</Text>
      </Box>
      <Box pr="20px">
        <Text>{sec}</Text>
        <Text>Giây</Text>
      </Box>
    </List>
  );
};

export const Power = () => {
  const { onToggle, onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Box bg="#edf2f7" py={"80px"} bgRepeat="no-repeat">
      <Container maxW="6xl">
        <SimpleGrid
          spacing={"8"}
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        >
          <GridItem>
            <Image priority
              src={`/AOF-tuyen-sinh.png`}
              width={1080}
              height={1080}
              alt="image"
              style={{ maxHeight: "480px", objectFit: "contain" }}
            />

            <Box
              color={"#00165a"}
              mt="25px"
              fontSize={"24px"}
              fontWeight="600"
              textAlign="center"
            >
              Thời gian nhận hồ sơ xét tuyển
            </Box>
            <Flex justifyContent="center">
              <Timer />
            </Flex>
          </GridItem>
          <GridItem>
            <Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                fontSize={"24px"}
                color={"#fe9800"}
              >
                TUYỂN SINH 2023
              </Text>
              <Text textAlign={"left"} pt={"12px"} fontSize={"16px"}>
                Xét tuyển theo hồ sơ học bạ THPT, Văn bằng; Nhận hồ sơ liên tục
                trong năm
              </Text>
            </Box>
            <Box>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"24px"}
                color={"#fe9800"}
              >
                Đợt khai giảng: 10/2023
              </Text>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"18px"}
                color={"#00165a"}
              >
                1. Đối tượng tuyển sinh
              </Text>
              <Text textAlign={"left"} pt={"10px"} fontSize={"16px"}>
                Sinh viên đang theo tại các trường đại học, cao đẳng.
              </Text>
              <Text textAlign={"left"} fontSize={"16px"}>
                Cán bộ, công chức, người đang làm việc tại các cơ quan, tổ chức,
                doanh nghiệp nhà nước, tư nhân, … đã có bằng tốt nghiệp THPT
              </Text>{" "}
              <Text textAlign={"left"} fontSize={"16px"}>
                Những người đã có bằng tốt nghiệp THPT hoặc tương đương trở lên.
              </Text>
              <Text
                fontWeight={"bold"}
                textAlign={"left"}
                pt={"12px"}
                fontSize={"18px"}
                color={"#00165a"}
              >
                2. Thời gian và thủ tục đăng ký
              </Text>
              <Text textAlign={"left"} pt={"10px"} fontSize={"18px"}>
                Thời gian học: Căn cứ vào hồ sơ, văn bằng của sinh viên nộp
                trong hồ sơ xét tuyển
              </Text>
              <Text textAlign={"left"} fontSize={"18px"}>
                Cách đăng ký: Học viên vui lòng liên hệ theo hotline hoặc đăng
                ký theo form để được hỗ trợ tư vấn chi tiết về chương trình, lộ
                trình học và thủ tục đăng ký chương trình đại học từ xa của
                trường.
              </Text>
            </Box>

            <Flex justifyContent="center" pt="25px">
              <Button
                color={"white"}
                size={"2xl"}
                rounded={"sm"}
                fontSize={"15px"}
                lineHeight={"63px"}
                p={"0 40px"}
                transform={"skew(-15deg, 0)"}
                bg={"linear-gradient(135deg,#035762 0%,#009eb3 100%)"}
                transition={"all ease .4s"}
                _hover={{
                  background:
                    "linear-gradient(135deg,#009eb3 0%, #035762 100%)",
                }}
                onClick={onToggle}
              >
                <Text transform={"skew( 15deg, 0)"}> Đăng ký ngay</Text>
              </Button>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Container>

      <ModalBase isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <FormGetFly1 title="Để lại thông tin" />
      </ModalBase>
    </Box>
  );
};
