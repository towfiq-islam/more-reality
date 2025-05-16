"use client";
import Heading from "@/components/Tags/Heading/Heading";
import React, { useRef } from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Button from "@/components/Tags/Button/Button";
import { ArrowSvg } from "@/components/SvgContainer/SvgContainer";
import TestimonialCard from "@/components/cards/TestimonialCard";
import beard from "../../../assests/home/beard.png";

interface TestimonialProps {
  imgUrl: string | any;
  name: string;
  review: string;
  rating: number;
}

const agentSuccessStories: TestimonialProps[] = [
  {
    imgUrl: beard,
    name: " Sarah M",
    review:
      "“Joining MORE Realty was the best career move I ever made. The mentorship, tools, and support helped me triple my business in just two years.”",
    rating: 3,
  },
  {
    imgUrl: beard,
    name: "Mark T.",
    review:
      "“As a busy dad, flexibility was key. MORE Realty gave me the freedom to manage my schedule, and the backend support allowed me to focus on what I do best — serving clients.”",
    rating: 4,
  },
  {
    imgUrl: beard,
    name: "Emily K.",
    review:
      "“The marketing support at MORE Realty is incredible! I have professional-looking materials and social media content that make me stand out — without spending hours designing it myself.”",
    rating: 5,
  },
  {
    imgUrl: beard,
    name: "Emily Clark",
    review:
      "“Our clients’ success stories speak for themselves. See how we’ve helped businesses and individuals achieve their real estate and consulting goals with expert guidance and tailored solutions.”",
    rating: 4,
  },
  {
    imgUrl: beard,
    name: "Michael Lee",
    review:
      "“Our clients’ success stories speak for themselves. See how we’ve helped businesses and individuals achieve their real estate and consulting goals with expert guidance and tailored solutions.”",
    rating: 5,
  },
];

const ContactUsTestimonial = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <section className="h-auto w-full bg-off-white mt-20">
      <div className="container py-20 flex flex-col gap-y-[36px] items-center">
        <div className="flex items-center justify-between w-full">
          <div className="flex-1 flex justify-center">
            <Heading
              Variant="h4"
              Txt={"Agent Success Stories"}
              className="testimonial-heading"
            />
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
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            spaceBetween={30}
            slidesPerView={3}
            className="overflow-hidden"
          >
            {agentSuccessStories.map((item, idx) => (
              <SwiperSlide key={idx}>
                <TestimonialCard
                  key={idx}
                  imgUrl={item.imgUrl}
                  name={item.name}
                  review={item.review}
                  isDownPart={false}
                  rating={item.rating}
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
