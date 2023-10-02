import { Container } from "@chakra-ui/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSize } from "../../hooks/useSizeWindow";

export const Partner = () => {
  const { size } = useSize();

  const partners = [
    `/logo22.png`,
    `/logo11.png`,
    `/logo33.png`,
    `/logo44.png`,
    `/logo55.png`,
    `/logo9.jpg`,
    `/logo66.jpg`,
    `/logo77.jpg`,
    `/logo88.jpg`,
    `/logo99.jpg`,
  ];

  return (
    <Container maxW="6xl">
      <Swiper
        slidesPerView={(size.width < 480 && 3) || (size.width < 992 && 4) || 7}
        spaceBetween={10}
        modules={[Pagination]}
        className="mySwiper"
        style={{ marginTop: "40px", paddingBottom: "38px" }}
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            {
              <Image
                width={200}
                height={80}
                src={partner}
                alt="Đối tác Evstep"
                style={{ objectFit: "contain", height: "80px" }}
              />
            }
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};
