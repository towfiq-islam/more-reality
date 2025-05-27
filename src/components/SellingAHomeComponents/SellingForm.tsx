"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import sellingImg from "@/assests/selling_img.jpg";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { useSellerContact } from "@/hooks/mutations";

type FormData = {
  full_name: string;
  email: string;
  phone: number;
  message: string;
};

const SellingForm = () => {
  const { mutateAsync: sellerContactMutation, isPending } = useSellerContact();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await sellerContactMutation(data);
    reset();
  };

  return (
    <section className="w-full pb-[40px] lg:px-5 3xl:px-0">
      <div className="container  flex flex-col justify-center items-center gap-[40px] ">
        <div className="flex flex-col justify-center items-center">
          <Heading Txt={"I want to sell"} />
          <Paragraph
            Txt={
              "Start by telling us a little about yourself. We’ll follow up with details about your property next."
            }
            className="text-center xl:text-start"
          />
        </div>
        <div className=" flex w-full flex-col xl:flex-row justify-center items-center gap-[20px]">
          {/* left Form */}
          <div className=" rounded-xl w-full h-auto ">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-3 xl:space-y-5"
            >
              {/* Full Name */}
              <div className="w-full flex flex-col gap-[5px]">
                <label
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-base lg:text-xl "
                >
                  Full Name
                </label>
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("full_name", {
                    required: "Full name is required",
                  })}
                  className="w-full px-4 py-1.5 lg:py-3 border border-[#E6E6E6] rounded-[8px] outline-none"
                />
                {errors.full_name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.full_name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="w-full flex flex-col gap-[5px]">
                <label
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-base lg:text-xl "
                >
                  Email
                </label>
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full px-4 py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="w-full flex flex-col gap-[5px]">
                <label
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-base lg:text-xl "
                >
                  Phone
                </label>
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="number"
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full px-4 py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="w-full flex flex-col gap-[5px]">
                <label
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-base lg:text-xl "
                >
                  Message
                </label>
                <textarea
                  data-aos="fade-up"
                  data-aos-delay="100"
                  placeholder="Message"
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full px-4 py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              {/* Submit btn */}
              <div className="w-full  relative ">
                <button
                  type="submit"
                  disabled={isPending}
                  className="primary-btn !w-full disabled:!cursor-not-allowed"
                >
                  {isPending ? "Submitting...." : "Submit"}
                </button>
              </div>
            </form>
          </div>

          <div className="w-full hidden  xl:block  h-[560px]">
            <Image
              data-aos="fade-up"
              data-aos-delay="100"
              src={sellingImg}
              width={560}
              height={761}
              alt="Selling form"
              className="object-cover w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingForm;
