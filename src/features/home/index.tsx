"use client";

import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";

const Banner = dynamic(() => import("./Banner").then((mod) => mod.Banner));

const Benefit = dynamic(() => import("./Benefit").then((mod) => mod.Benefit));
const Benefitt = dynamic(() =>
  import("./Benefitt").then((mod) => mod.Benefitt)
);
const Contact = dynamic(() => import("./Contact").then((mod) => mod.Contact));

const Object = dynamic(() => import("./Object").then((mod) => mod.Object));
const Person = dynamic(() => import("./Person").then((mod) => mod.Person));

const Review = dynamic(() => import("./Review").then((mod) => mod.Review));

const Partner = dynamic(() => import("./Partner").then((mod) => mod.Partner));
const Register = dynamic(() =>
  import("./Register").then((mod) => mod.Register)
);
export const Home = ({ news, notifis }: { news: any[]; notifis: any[] }) => {
  return (
    <>
      <Box id="section0">
        <Banner />
      </Box>
      <Box id="section1">
        <Benefit />
      </Box>
      <Box id="section2">
        <Object />
      </Box>
      <Box id="section3">
        <Benefitt />
      </Box>
      <Box id="section4">
        <Person />
      </Box>
      <Box id="section5">
        <Partner />
      </Box>
      <Box id="section6">
        <Register />
      </Box>
      <Box id="section7">
        <Review />
      </Box>

      <Box id="section8">
        <Contact />
      </Box>
    </>
  );
};
