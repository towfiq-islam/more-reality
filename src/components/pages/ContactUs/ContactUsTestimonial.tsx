"use client";
import Heading from "@/components/Tags/Heading/Heading";
import React, { useRef } from "react";
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

const ContactUsTestimonial: React.FC<TestimonialProps> = ({ data }) => {
  // For Swiper
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="h-auto lg:px-5 3xl:px-0 w-full bg-off-white">
      <div className="container py-10 lg:py-20 flex flex-col gap-y-5 lg:gap-y-[36px] items-center">
        <div className="flex items-center flex-col lg:flex-row gap-5 lg:justify-between w-full">
          <div className="flex-1 flex justify-center">
            <Heading Variant="h4" Txt={"Agent Success Stories"} />
          </div>
          {/* Navigation buttons */}
          <div className="flex flex-row gap-x-5">
            <div
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 border border-primary-blue rounded-full cursor-pointer"
            >
              <ArrowSvg />
            </div>
            <div
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 border border-primary-blue rounded-full cursor-pointer rotate-180"
            >
              <ArrowSvg />
            </div>
          </div>
        </div>

        {/* Swiper */}
        <div className="w-full">
          <Swiper
            modules={[Navigation]}
            onSwiper={swiper => (swiperRef.current = swiper)}
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

export default ContactUsTestimonial;
