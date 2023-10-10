"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

const Kt = dynamic(() => import("@/features/nganh-kt").then((mod) => mod.Kt), {
  loading: () => <Loading />,
});

const Page = () => {
  return (
    <>
      <NextSeo
        title="Ngành kế toán - Học Viện Tài Chính"
        description="Ngành kế toán - Học Viện Tài Chính, thông tin ngành kế toán Học Viện Tài Chính"
      />
      <Kt />
    </>
  );
};

export default Page;
