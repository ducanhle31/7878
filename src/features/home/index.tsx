"use client";

import { Loading } from "@/components/Loading";
import { useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});

const ListTeacher = dynamic(
  () => import("./ListTeacher").then((mod) => mod.ListTeacher),
  {
    loading: () => <Loading />,
  }
);

const ModalBase = dynamic(
  () => import("./Modal").then((mod) => mod.ModalBase),
  {
    loading: () => <Loading />,
  }
);

const Power = dynamic(() => import("./Power").then((mod) => mod.Power), {
  loading: () => <Loading />,
});
const Testi = dynamic(() => import("./Testi").then((mod) => mod.Testi));

const Trend = dynamic(() => import("./Trend").then((mod) => mod.Trend));

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Banner />
      <ListTeacher />
      <Power />
      <Trend />
      <Testi />

      <ModalBase isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </>
  );
};
