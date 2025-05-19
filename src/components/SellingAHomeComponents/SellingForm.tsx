"use client";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import sellingformImage from "../../assests/selling-a-home/selling-form-image.jpg";
import Heading from "../Tags/Heading/Heading";
import Paragraph from "../Tags/Paragraph/Paragraph";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
};

const SellingForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);
    reset();
  };

  return (
    <section className="w-full pb-[40px]">
      <div className=" flex flex-col justify-center items-center gap-[40px] ">
        <div className="flex flex-col justify-center items-center">
          <Heading Txt={"I want to sell"} />
          <Paragraph
            Txt={
              "Start by telling us a little about yourself. We’ll follow up with details about your property next."
            }
          />
        </div>
        <div className="container mx-auto  flex flex-col md:flex-row justify-center items-center gap-[20px]">
          {/* left Form */}
          <div className="  rounded-xl w-full h-auto md:w-1/2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="w-full flex flex-col gap-[5px]">
                <label className="text-xl ">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full px-4 py-3 border border-[#E6E6E6] rounded-[8px] outline-none"
                />
                {errors.fullName && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.fullName.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-[5px]">
                <label className="text-xl ">Email</label>
                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md outline-none"
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-[5px]">
                <label className="text-xl ">Phone</label>
                <input
                  type="tel"
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md outline-none"
                />
                {errors.phone && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div className="w-full flex flex-col gap-[5px]">
                <label className="text-xl ">Message</label>
                <textarea
                  placeholder="Message"
                  rows={5}
                  {...register("message", {
                    required: "Message is required",
                  })}
                  className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md outline-none resize-none"
                ></textarea>
                {errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#004172] text-white font-medium py-3 rounded-md hover:bg-[#00345a] transition"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="w-[450px] h-[560px]">
            <Image
              src={sellingformImage}
              width={560}
              height={761}
              alt="Selling form"
              className="object-center w-full h-full rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellingForm;
