"use client";

import { Loading } from "@/components/Loading";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";

const LichKg = dynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Lịch khải Giảng - Học Viện Tài Chính"
        description="Lịch khải giảng hệ đào tạo từ xa =Học Viện Tài Chính - hệ đại học từ xa"
      />
      <LichKg />
    </>
  );
};

export default Page;
