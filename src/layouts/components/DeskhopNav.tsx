import { menus } from "@/router";
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

interface INavItem {
  title: string;
  children?: Array<INavItem>;
  path?: string;
}

export const DesktopNav = () => {
  const linkColor = "rgba(255,255,255,0.8)";
  const linkHoverColor = "#ffffff";


  return (
    <Stack direction={"row"} spacing={4}>
      {menus.map((navItem) => (
        <Box key={navItem.title}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as={"a"}
              
                href={navItem.path ?? "#"}
                fontSize={"12.6"}
                fontWeight={600}
              display={"flex"}
                textTransform={"uppercase"}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.title}
              </Box>
            </PopoverTrigger>

        
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

export const DesktopSubNav = ({ title, path }: INavItem) => {
  return (
    <Box
      as={Link}
      href={path}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: "pink.50" }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            color={"#054659"}
            _groupHover={{ color: "#FA692E" }}
            fontWeight={600}
          >
            {title}
          </Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"#FA692E"} w={5} h={5} as={BsChevronRight} />
        </Flex>
      </Stack>
    </Box>
  );
};
