"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const About = dynamic(
  () => import("@/features/about").then((mod) => mod.About),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Giới thiệu về Học Viện Tài Chính"
        description="Trường Học Viện Tài Chính (Thai Nguyen University of Agriculture and Forestry – TUAF) được thành lập năm 1969, hiện nay là một đơn vị thành viên của Học Viện Tài Chính. Trải qua 52 năm xây dựng và phát triển, Trường Học Viện Tài Chính trở thành một trung tâm đào tạo và chuyển giao khoa học – công nghệ hàng đầu Việt Nam"
      />
      <About />
    </>
  );
};

export default Page;
