"use client";

import { Loading } from "@/components/Loading";
import { useDisclosure } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import { FormPoup } from "../../components/FormContact";

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
  const [id, setId] = useState("");
  const [href, setHref] = useState("");
  useEffect(() => {
    const getForm = async () => {
      try {
        const res = await fetch(`/api/data-form/?type=form-poup`);
        const data = await res.json();
        const id = data?.id || "";
        id && setId(id);
        const href = data?.href || "";
        href && setHref(href);
      } catch (error) {
        console.log(error);
      }
    };
    getForm();
  }, [id, href, isOpen]);
  useEffect(() => {
    setTimeout(() => {
      onOpen();
    }, 1500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Banner />
      <ListTeacher />
      <Power />
      <Trend />
      <Testi />
    
      <ModalBase
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        form={<FormPoup id={id} href={href} title="Để lại thông tin" />}
      />
    </>
  );
};
