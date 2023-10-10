"use client";

import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  List,
  ListIcon,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { BiPlus } from "react-icons/bi";
import { BsCheckLg } from "react-icons/bs";

interface IBranch {
  name: string;
  overview: string[];
  jobs: string[];
  program: string[];
  person: string[];
  procedure: string[];
}

export const Accs = ({
  accs,
}: {
  accs: {
    title: string;
    detail: {
      title: string;
      list: string[];
    }[];
  }[];
}) => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      {accs.map((acc, index) => (
        <AccordionItem border={"none"} key={index} py={"12px"} rounded={"sm"}>
          <AccordionButton bg={"gray.50"} py="16px" rounded={"sm"}>
            <Box flex="1" textAlign="left">
              <HStack>
                <Heading fontSize={{ base: "sm", md: "md" }}>
                  {acc.title}
                </Heading>
              </HStack>
            </Box>
            <Icon as={BiPlus} />
          </AccordionButton>
          <AccordionPanel pb={4} color={"gray.900"}>
            {acc?.detail?.map((item, index) => (
              <Box key={index}>
                <Heading as={"h4"} size={"sm"}>
                  {item?.title}
                </Heading>
                <UnorderedList>
                  {item?.list?.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                  ))}
                </UnorderedList>
              </Box>
            ))}
            <UnorderedList></UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export const Branch = (props: IBranch) => {
  const { name, overview, jobs, program, person, procedure } = props;
  return (
    <Box color={"blue.800"}>
      <Flex>
        <Divider
          w={"50px"}
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
          color={"#00165a"}
        >
          {`${name}`}
        </Text>
      </Flex>

      <Box pt={"26px"}>
        {overview?.map((item, index) => (
          <Text key={index} fontWeight={500} pb={"12px"}>
            {item}
          </Text>
        ))}
      </Box>
      <HStack pb={"16px"}>
        <Heading as={"h2"} size={"md"}>
          Đăng ký nhận chương trình học tại…..
        </Heading>
      </HStack>
      <Box pt={"26px"}>
        <HStack pb={"16px"}>
          <Heading as={"h2"} size={"md"}>
            Thời gian đào tạo
          </Heading>
        </HStack>

        <List>
          {jobs?.map((item, index) => (
            <ListItem key={index} fontWeight={500} pb={"12px"}>
              <ListIcon
                as={BsCheckLg}
                fontSize={"22px"}
                color="white"
                borderRadius={100}
                bgImage={"-webkit-linear-gradient(left,#f55301,#ff9f00)"}
              />
              {item}
            </ListItem>
          ))}
        </List>
      </Box>

      <Box pt={"32px"}>
        <HStack pb={"16px"}>
          <Divider
            w={"50px"}
            mr={"20px"}
            borderColor={"#f5750d"}
            style={{ borderBottomWidth: "4px" }}
          />
          <Heading as={"h2"} fontSize={"24px"}>
            {`  Mục tiêu đào tạo ngành ${name}`}
          </Heading>
        </HStack>
        <Box pt={"26px"}>
          {program?.map((item, index) => (
            <Text key={index} fontWeight={500} pb={"12px"}>
              {item}
            </Text>
          ))}
        </Box>
      </Box>
      <Box pt={"32px"}>
        <HStack>
          <Heading as={"h2"} size={"md"}>
            Đối tượng dự tuyển được xác định tại thời điểm xét tuyển:
          </Heading>
        </HStack>
        <Box pt={"16px"}>
          {person?.map((item, index) => (
            <Text key={index} fontWeight={500} pb={"12px"}>
              {item}
            </Text>
          ))}
        </Box>
      </Box>
      <Box pt={"32px"}>
        <HStack>
          <Heading as={"h2"} size={"md"}>
            Phương thức tuyển sinh
          </Heading>
        </HStack>
        <Box pt={"16px"}>
          {procedure?.map((item, index) => (
            <Text key={index} fontWeight={500} pb={"12px"}>
              {item}
            </Text>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
