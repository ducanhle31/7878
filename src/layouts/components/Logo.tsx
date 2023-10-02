
import Link from "next/link";
import { useBreakpointValue,Image } from "@chakra-ui/react";
export const Logo = () => {
  const height = useBreakpointValue({ base: "70px", md: "105px" });
  const width = useBreakpointValue({ base: "auto", md: "228px" });
  return (
    <Link href="/">
      <Image
        
        width={width}
        height={height}
        src={`/zzz.png`}
        alt="logo"
      />
    </Link>
  );
};
