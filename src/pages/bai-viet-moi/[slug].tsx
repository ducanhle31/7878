"server only";
import ErrorBoundary from "@/components/ErrorBoundary";
import { Post } from "@/features/post";
import { Sidebar } from "@/layouts/components/Sidebar";
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const api_url = process.env.API_URL || "";
  try {
    const params = context.params;
    const slug = params?.slug || "";
    const res = await fetch(`${api_url}/posts?categories=82slug=${slug}`, {
      next: { revalidate: 1 },
    });
    const posts = await res.json();
    const post = posts ? posts[0] : null;

    return {
      props: { post: post || null },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { post: null },
    };
  }
};

interface IPostPage {
  post: any;
}

const Page = (props: IPostPage) => {
  const { post } = props;
  return (
    <>
      <NextSeo
        title={
          post.title?.rendered || "Học Viện Tài Chính - tuyển sinh hệ từ xa"
        }
        description={
          post.excerpt?.rendered ||
          "Học Viện Tài Chính - tuyển sinh hệ từ xa, học tập tiết kiệm thời gian và chi phí bằng cử nhân do Bộ Giáo dục cấp"
        }
      />
      <Box
        w={"100%"}
        bg="rgba(0, 0, 0, 0)"
        bgSize="cover"
        bgRepeat={"no-repeat"}
        position="relative"
      >
        <Box
          pos="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgImage="/bg-gt.jpg"
          zIndex={-1}
          filter="auto"
          brightness="40%"
          bgSize="cover"
          bgRepeat={"no-repeat"}
          bgPosition={"0px"}
        ></Box>
        <Container maxW={"6xl"} py="62px">
          <Box>
            <Heading
              as="h2"
              textAlign={"center"}
              fontSize={{ base: "36px", lg: "40px" }}
              fontWeight={700}
              mt="75px"
              color={"white"}
            >
              {post?.title?.rendered ||
                "Học Viện Tài Chính - tuyển sinh hệ từ xa"}
            </Heading>
            <Text
              mt={"18px"}
              fontSize={"16px"}
              textAlign={"center"}
              color={"white"}
              pb="60px"
            >
              Trang chủ - {post?.title?.rendered}
            </Text>
          </Box>
        </Container>
      </Box>
      <ErrorBoundary fallback={<h1>Lỗi phía máy chủ</h1>}>
        <Container maxW={"6xl"} mt={"42px"}>
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={"42px"}>
            <GridItem colSpan={{ lg: 2 }}>
              <Post post={post} />
            </GridItem>
            <GridItem colSpan={{ lg: 1 }}>
              <Sidebar sticky="125px" />
            </GridItem>
          </SimpleGrid>
        </Container>
      </ErrorBoundary>
    </>
  );
};

export default Page;
