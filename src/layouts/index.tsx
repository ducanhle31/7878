import { Loading } from "@/components/Loading";
import { ReactNode } from "react";
import { Footer } from "./footer";
import { Header } from "./header";


import dynamic from "next/dynamic";


const BackToTop = dynamic(
  () => import("./components/BackToTop").then((mod) => mod.BackToTop),
  {
    loading: () => <Loading />,
  }
);

interface ILayout {
  children: ReactNode;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <main>{children}</main>
       <BackToTop />
      <Footer />

    
    </>
  );
};

export default Layout;
