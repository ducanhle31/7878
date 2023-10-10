import {
          Box,
          Button,
          Container,
          Divider,
          GridItem,
          HStack,
          SimpleGrid,
          Text,
        } from "@chakra-ui/react";
        import styled from "@emotion/styled";
        import Image from "next/image";
        import Link from "next/link";
        import { AiOutlineRight } from "react-icons/ai";
        
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
            --bg-color: #18295c;
            --accent-color: #bc8d66;
            position: relative;
            align-items: center;
            justify-content: center;
            width: 104px;
        
            height: 104px;
            margin-bottom: 100px;
            display: flex;
            flex-direction: column;
            gap: 5px;
            background-color: var(--bg-color);
            transition: all 0.2s;
            cursor: pointer;
            box-shadow: 0px 0px 5px -1.5px #000;
        
            &:before {
              content: "";
              width: 100%;
              height: 100%;
              background: var(--sub-color);
              position: absolute;
              z-index: -1;
              top: 0px;
              left: 0px;
        
              transition: all 0.3s;
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
        
            &:hover {
              box-shadow: 0px 0px 20px -5px #000;
        
              &:before {
                transform: rotate(15deg);
                box-shadow: 0px 0px 20px -5px #000;
              }
            }
          `;
        
          return (
            <Box zIndex={"100"}>
              <Box
                display="flex"
                color={"#FFF"}
                lineHeight={"27px"}
                flexDirection="column"
                alignItems={"center"}
                textAlign={"center"}
                width="100%"
                bgPosition="center"
              >
                <CardWrapper className="card">
                  <Box className="card__wrapper"></Box>
                  <Image src={image} alt="" width={50} height={50} className="t" />
                </CardWrapper>
                <Text
                  className=" card__title"
                  mt={"-70px"}
                  mb={"16px"}
                  fontSize={"22px"}
                  fontWeight={"700"}
                >
                  {title}
                </Text>
                <Text
                  className="card__icon"
                  p={"0 20px"}
                  height={"80px"}
                  color={"#bccbfb"}
                  fontSize={"14px"}
                >
                  {desc}
                </Text>
              </Box>
        
              <HStack justify={"center"} color={" #f7c42a"}>
                <Button
                  as={Link}
                  href={"/tin-tuc"}
                  colorScheme="#0ddbff"
                  variant={"link"}
                  fontSize={{ base: "md", md: "xl" }}
                >
                  {title} &nbsp; <AiOutlineRight />
                </Button>
              </HStack>
            </Box>
          );
        };
        
        export const Service = () => {
          const teachers = [
            {
              title: "Ms Huyền",
              desc: "2 năm asda sfasf f sdfs fsdfsd ",
              avt: `/teacher.jpg`,
            },
            {
              title: "Ms Huyền ",
              desc: "2 năm sdf xvsdf s bcvb gb fgbd sd s sđs ds",
              avt: `/teacher.jpg`,
            },
            {
              title: "Ms Huyền ",
              desc: "2 năm s dfs d fsd svbc vb df sd s sdf",
              avt: `/teacher.jpg`,
            },
            {
              title: "Ms Huyền ",
              desc: "2 năm s d fsdfsdf sdf sdf d fsdf",
              avt: `/teacher.jpg`,
            },
          ];
        
          return (
            <Box bg={" rgba(1,13,50,0.9)"} h={{ base: "auto", lg: "1062px" }}>
              <Container maxW={"6xl"} pb={"85px"}>
                <SimpleGrid
                  pt={"24px"}
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
                        borderColor={"#ff7b0e"}
                        style={{ borderBottomWidth: "4px" }}
                      />
                      <Text
                        fontWeight={"bold"}
                        textAlign={"left"}
                        pt={"12px"}
                        fontSize={"36px"}
                        color={"white"}
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
                      color={"#bccbfb"}
                    >
                      Our team have designed game changing products, consulted for
                      companies as well and become a multinational firm, offering
                      solutions Worldwide.
                    </Text>
                  </GridItem>
                </SimpleGrid>
                <SimpleGrid columns={[1, null, 4]} spacing="40px">
                  {teachers?.map((teacher, index) => (
                    <CardTeacher
                      key={index}
                      title={teacher.title}
                      desc={teacher.desc}
                      image={teacher.avt}
                    />
                  ))}
                </SimpleGrid>
              </Container>
            </Box>
          );
        };
        