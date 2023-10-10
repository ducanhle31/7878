"use client";
import {
  Box,
  Button,
  Container,
  Divider,
  GridItem,
  HStack,
  List,
  ListIcon,
  ListItem,
  Radio,
  RadioGroup,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { CgRadioChecked } from "react-icons/cg";
import "swiper/css";
import "swiper/css/pagination";
interface Props {
  children: React.ReactNode;
}

export const PriceWrapper = ({
  item,
  text,
  dec,
}: {
  item: number;
  text: string;
  dec: string[];
}) => {
  const isBasicPlan = text === "Standard Plan";
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: "center", lg: "flex-end" }}
      borderColor={useColorModeValue("gray.200", "gray.500")}
      borderRadius={"xl"}
      bgImage={"/bg-pricing-03.png"}
      bgRepeat={"no-repeat"}
    >
      {isBasicPlan && (
        <Box
          position="relative"
          top="-16px"
          left="50%"
          style={{ transform: "translate(-50%)" }}
        >
          <Text
            display={"flex"}
            h={"40px"}
            alignItems={"center"}
            justifyContent={"center"}
            textTransform="uppercase"
            bgColor="
           #1040d3"
            px={3}
            py={1}
            borderRadius={"20px 0 0 20px"}
            color="white"
            fontSize="sm"
            fontWeight="600"
            rounded="xl"
          >
            Most Popular
          </Text>
        </Box>
      )}
      <Box py={4}>
        <Box px={"25px"}>
          <Text
          
            textAlign={"left"}
            lineHeight={"30px"}
            fontWeight="700"
            fontSize="24px"
            color="#00175b"
          >
            {text}
          </Text>
          <Text
            mt={"6px"}
            textAlign={"left"}
            lineHeight={"30px"}
            fontWeight="500"
            fontSize="16px"
            color="#4d546b"
          >
            {" "}
            The argument in favor of using to filler text goes something.
          </Text>
        </Box>

        <HStack
          mt={"20px"}
          h={"60px"}
          justifyContent="center"
          style={{
            background: "linear-gradient(-190deg,#f7c42a,#f5750d)",
            color: "White",
          }}
        >
          <Text fontSize="36px" fontWeight="600">
            $ {item}
          </Text>
          <Text fontSize="16px">/month</Text>
        </HStack>
      </Box>
      <VStack py={4} px={"20px"} alignItems={"flex-start"}>
        <List textAlign="start" pl={"15px"}>
          {dec?.map((value, index) => (
            <ListItem
              display={"flex"}
              alignItems={"center"}
              h={"52px"}
              key={index}
              fontSize={"15px"}
            
            >
              <ListIcon as={CgRadioChecked} color="#1040d3" />
              {value}
            </ListItem>
          ))}
        </List>
      </VStack>

      <Box display={"flex"} justifyContent={"center"}>
        <Box w="80%" pt={7} pb={"27px"}>
          <Button
            color={"white"}
            w="full"
            size={"2xl"}
            rounded={"sm"}
            fontSize={"15px"}
            lineHeight={"63px"}
            p={"0 40px"}
            transform={"skew(-15deg, 0)"}
            bg={"linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)"}
            transition={"all ease .4s"}
            _hover={{
              background:
                "linear-gradient(135deg,rgb(40,116,252) 0%,rgb(2,3,129) 100%)",
            }}
          >
            <Text transform={"skew( 15deg, 0)"}> Start trial </Text>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export const Pricing = () => {
  const [array1, setArray1] = useState([100, 200, 300]);
  const [array2, setArray2] = useState([150, 250, 350]);
  const textArray = [
    {
      text: "Basic Plan",
      dec: ["bghh fgac", "dfdf sdfdf", "xdfvdfgdbh"],
    },
    { text: "Standard Plan", dec: ["qdfgd fgưe", "sddf dfdc", "dffdfddf"] },
    { text: "Extended Plan", dec: ["qdf ưhe", "sdgddf c", "dffdfgff"] },
  ];
  // Khởi tạo state để lưu trạng thái hiển thị mảng
  const [showArray1, setShowArray1] = useState(true);

  // Hàm xử lý khi click vào button 1
  const handleButton1Click = () => {
    setShowArray1(true);
  };

  // Hàm xử lý khi click vào button 2
  const handleButton2Click = () => {
    setShowArray1(false);
  };

  return (
    <Container maxW={"6xl"}>
      <SimpleGrid pt={"70px"} marginBottom={"60px"}>
        <GridItem>
          <Box display={"flex"}>
            <Divider
              w={"50px"}
              pt={"40px"}
              mr={"20px"}
              borderColor={"#f5750d"}
              style={{ borderBottomWidth: "4px" }}
            />
            <Text
              lineHeight={"48px"}
              fontWeight={"700"}
              textAlign={"left"}
              pt={"15px"}
              fontSize={"36px"}
              color={"#00165a"}
            >
              We will satisfy you by our servicing plan
            </Text>
          </Box>
        </GridItem>
        <GridItem display={"flex"} justifyContent={"center"} mt={"45px"}>
          <RadioGroup defaultValue="2">
            <Stack spacing={5} direction="row">
              <Radio
                onClick={handleButton1Click}
                style={{ color: "#1040d3", lineHeight: "30px" }}
                value="1"
              >
                Monthly
              </Radio>
              <Radio
                onClick={handleButton2Click}
                style={{ color: "#1040d3", lineHeight: "30px" }}
                value="2"
              >
                Yearly &nbsp;
                <Button
                  h={"27px"}
                  colorScheme="gray"
                  color={"#1a1e66"}
                  fontSize={"12px"}
                  lineHeight={"27px"}
                >
                  Save 20%
                </Button>
              </Radio>
            </Stack>
          </RadioGroup>
        </GridItem>
      </SimpleGrid>
      <SimpleGrid columns={[1, null, 3]} spacing="40px">
        {showArray1
          ? array1.map((item, index) => (
              <PriceWrapper
                key={index}
                item={item}
                text={textArray[index].text}
                dec={textArray[index].dec}
              />
            ))
          : array2.map((item, index) => (
              <PriceWrapper
                key={index}
                item={item}
                text={textArray[index].text}
                dec={textArray[index].dec}
              />
            ))}
      </SimpleGrid>
    </Container>
  );
};
