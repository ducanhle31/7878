import { AspectRatio, Container, GridItem, SimpleGrid } from "@chakra-ui/react";
import { FormContact } from "../../components/FormContact";
export const Map = () => {
  return (
    <Container maxW="6xl" zIndex={"110"} position={"relative"} mt={{base:"auto",lg:"-450px"}}>
      <SimpleGrid
        boxShadow="xl" 
        templateColumns={{ base: "repeat(1, 1fr)", lg: "repeat(20, 1fr)" }}
      >
        <GridItem colSpan={9}>
          <AspectRatio ratio={16 / 9} h={"650px"}>
            <iframe   src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.7609480744445!2d105.77113527504899!3d21.042248987315634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454c918a64e17%3A0x6a26c7ecd7ef4df2!2zMTE2IFAuIFRy4bqnbiBW4bu5LCBNYWkgROG7i2NoLCBD4bqndSBHaeG6pXksIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1696408177465!5m2!1svi!2s' />
          </AspectRatio>
        </GridItem>

        <GridItem
          colSpan={11}
          h={"650px"}
          bg="#ffffff"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          flexDirection={"column"}
          pt={"36px"}
        >
          <FormContact />
        </GridItem>
      </SimpleGrid>
    </Container>
  );
};
