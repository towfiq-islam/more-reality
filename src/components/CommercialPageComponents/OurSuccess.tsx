"use client";
import Heading from "@/components/Tags/Heading/Heading";
import { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowSvg } from "@/components/SvgContainer/SvgContainer";
import TestimonialCard from "@/components/cards/TestimonialCard";

type TestimonialCard = {
  image: string;
  name: string;
  speech: string;
};

interface TestimonialProps {
  data: TestimonialCard[];
}

const OurSuccess: React.FC<TestimonialProps> = ({ data }) => {
  // For Swiper
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="py-10 2xl:py-20 mb-10 lg:mb-20 lg:px-5 3xl:px-0 bg-propertyBg">
      <div className="container">
        {/* Upper Part */}
        <div className="flex items-center flex-col lg:flex-row gap-5 lg:justify-between w-full mb-5 2xl:mb-10">
          {/* Heading */}
          <div className="flex-1 flex text-center justify-center">
            <Heading Txt="Success Stories" Variant="h3" />
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-row gap-x-5">
            <div
              onClick={handlePrev}
              className="flex items-center justify-center w-10 2xl:w-12 h-10 2xl:h-12 border border-primary-blue rounded-full cursor-pointer"
            >
              <ArrowSvg data-aos="fade-up" data-aos-delay="100" />
            </div>
            <div
              onClick={handleNext}
              className="flex items-center justify-center w-10 2xl:w-12 h-10 2xl:h-12 border border-primary-blue rounded-full cursor-pointer rotate-180"
            >
              <ArrowSvg data-aos="fade-up" data-aos-delay="100" />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            onSwiper={(swiper: SwiperType) => (swiperRef.current = swiper)}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="overflow-hidden"
          >
            {data?.map((item, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard
                  key={idx}
                  imgUrl={item?.image}
                  name={item?.name}
                  review={item?.speech}
                  isDownPart={false}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
