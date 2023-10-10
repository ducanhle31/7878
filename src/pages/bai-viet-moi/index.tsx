import { LatestPost } from "@/features/latestPost";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Học Viện Tài Chính"
        description="Học Viện Tài Chính tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Học Viện Tài Chính"
      />
      <LatestPost />
    </>
  );
};

export default Page;
