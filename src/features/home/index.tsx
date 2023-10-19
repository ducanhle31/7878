"use client";

import { BtnMes, BtnPhone, BtnZalo } from "@/components/BtnCTA";
import { Loading } from "@/components/Loading";
import { useSize } from "@/hooks/useSizeWindow";
import { Box, VStack, useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner), {
  loading: () => <Loading />,
});

const Categorys = dynamic(
  () => import("./Categorys").then((mod) => mod.Categorys),
  {
    loading: () => <Loading />,
  }
);
const ListTeacher = dynamic(
  () => import("./ListTeacher").then((mod) => mod.ListTeacher),
  {
    loading: () => <Loading />,
  }
);
const ListPerson = dynamic(() =>
  import("./ListPerson").then((mod) => mod.ListPerson)
);

const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact), {
  loading: () => <Loading />,
});

const Event = dynamic(() => import("./Event").then((mod) => mod.Event), {
  loading: () => <Loading />,
});

const ModalBase = dynamic(
  () => import("./Modal").then((mod) => mod.ModalBase),
  {
    loading: () => <Loading />,
  }
);
const Review = dynamic(() => import("./Review").then((mod) => mod.Review), {
  loading: () => <Loading />,
});

const Service = dynamic(() => import("./Service").then((mod) => mod.Service));

const Map = dynamic(() => import("./Map").then((mod) => mod.Map));
const Power = dynamic(() => import("./Power").then((mod) => mod.Power), {
  loading: () => <Loading />,
});
const Testi = dynamic(() => import("./Testi").then((mod) => mod.Testi));
const Pricing = dynamic(() => import("./Pricing").then((mod) => mod.Pricing));
const Trend = dynamic(() => import("./Trend").then((mod) => mod.Trend));

export const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    onOpen();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner />

      <ListTeacher />
      <Power />
      <Trend />
      <Testi />
    
     <ListPerson />
      <Contact />
      <Review />
      <Service />
      <Map />
      <Pricing />

      <Event />

      <ModalBase isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      {/*   <Box
        pos={"fixed"}
        top={"50%"}
        right={"0"}
        transform={"translateY(-50%)"}
        className="CTA"
        zIndex={5}
      >
        <VStack>
      
          <BtnMes aria-label="messenter" />
          <BtnZalo aria-label="zalo" />
          <BtnPhone aria-label="phone" />
        </VStack>
      </Box> */}
    </>
  );
};
