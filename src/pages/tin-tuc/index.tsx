import ErrorBoundary from "@/components/ErrorBoundary";
import { Posts } from "@/features/posts";
import { NextSeo } from "next-seo";

const Page = () => {
  return (
    <>
      <NextSeo
        title="Tin tức và thông báo tuyển sinh - Học Viện Tài Chính"
        description="Học Viện Tài Chính tuyển sinh năm 2023 - tổng hợp các tin tức tuyển sinh mới nhất của Học Viện Tài Chính"
      />
      <ErrorBoundary fallback={<h1>Lỗi server</h1>}>
        <Posts />
      </ErrorBoundary>
    </>
  );
};

export default Page;
