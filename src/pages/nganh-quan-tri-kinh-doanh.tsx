"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Qtkd = dynamic(
  () => import("@/features/nganh-qtkd").then((mod) => mod.Qtkd),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kế toán - Học Viện Tài Chính"
        description="Ngành kế toán - Học Viện Tài Chính, thông tin ngành kế toán Học Viện Tài Chính"
      />
      <Qtkd />
    </>
  );
};

export default Page;
