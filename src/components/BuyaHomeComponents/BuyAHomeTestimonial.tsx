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

const BuyAHomeTestimonial: React.FC<TestimonialProps> = ({ data }) => {
  // For Swiper
  const swiperRef = useRef<SwiperType | null>(null);
  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };
  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="h-auto lg:px-5 3xl:px-0 w-full bg-off-white mt-10 mb-10 2xl:mb-20 3xl:mb-[120px]">
      <div className="container py-10 lg:py-20 flex flex-col gap-y-5 lg:gap-y-[36px] items-center">
        <div className="flex items-center flex-col lg:flex-row gap-5 lg:justify-between w-full">
          <div className="flex-1 flex justify-center">
            <Heading
              Variant="h4"
              Txt={"Hear From Our Happy Buyers"}
              className="testimonial-heading text-center lg:text-start"
            />
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
                  imgUrl={item.imgUrl}
                  name={item.name}
                  review={item.review}
                  isDownPart={false}
                  rating={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default BuyAHomeTestimonial;
