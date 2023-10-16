"use client";

import { Loading } from "@/components/Loading";
import { Box, Container, Divider, Heading, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const SLiderPosts = dynamic(
  () => import("./SliderPosts").then((mod) => mod.SLiderPosts),
  {
    loading: () => <Loading />,
  }
);

const ListPosts = dynamic(
  () => import("./ListPosts").then((mod) => mod.ListPosts),
  {
    loading: () => <Loading />,
  }
);

export const Posts = () => {
  const router = useRouter();
  const handleRouter = ({ selected }: { selected: number }) => {
    router.push(`/tin-tuc?page=${selected + 1}`);
  };

  return (
    <Box pb={"40px"}>
      <Box
        w={"100%"}
        bgImage="/bg-page-title.jpg"
        bgRepeat={"no-repeat"}
        bgSize={"cover"}
        bgPosition={"-10px"}
      >
        <Container maxW={"6xl"} py="62px">
          <Heading
            as="h2"
            textAlign={"center"}
            fontSize={{ base: "36px", lg: "40px" }}
            fontWeight={700}
            mt="75px"
            mb="75px"
            color={"white"}
          >
            Tin tức Học Viện Tài Chính
          </Heading>
        </Container>
      </Box>
      <Box mt={"32px"}>
        <Suspense fallback={<Loading />}>
          <SLiderPosts />
        </Suspense>
      </Box>

      <Divider size={"xl"} />
      <Box pt={"32px"}>
        <Suspense fallback={<Loading />}>
          <ListPosts handleRouter={handleRouter} />
        </Suspense>
      </Box>
    </Box>
  );
};
