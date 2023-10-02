import { Button, ButtonProps } from "@chakra-ui/react";

export const BtnTheme = (props: ButtonProps) => {
  const { children, ...args } = props;
  return (
    <Button
      color={"  #333"}
      size={"md"}
      rounded={"sm"}
      {...args}
      bg={"white"} borderRadius={"50px"}
      transition={"all ease .4s"}
      _hover={{
        background:
          "#f1f1f1",
      }}
    >
      {children}
    </Button>
  );
};
