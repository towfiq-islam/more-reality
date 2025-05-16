"use client";
import React from "react";
import contactus from "../../../assests/contact-us/contact-img.png";
import { useForm } from "react-hook-form";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  message: string;
};

const ContactFormSection = () => {
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
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16 sm:py-20 md:py-24"
      style={{
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${contactus.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-y-12 md:gap-12">
        {/* Left Side */}
        <div className="text-white w-full md:w-1/2">
          <h2 className="text-3xl sm:text-4xl md:text-[48px] font-normal leading-[130%] mb-6">
            Stay Connected & Elevate Your Real Estate Journey with Confidence
          </h2>
          <p className="text-base sm:text-lg md:text-[20px] font-normal leading-[30px] md:leading-[32px]">
            Our Real Estate CRM system empowers you with deeper insights,
            seamless automation, and data-driven strategies—all in one place.
            Submit your details below, and let's elevate your real estate
            journey together!
          </p>
        </div>

        {/* Right Form */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-2xl w-full md:w-1/2">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  placeholder="First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="w-full px-4 py-3 border border-[#E6E6E6] rounded-[8px] outline-none"
                />
                {errors.firstName && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className="w-full sm:w-1/2">
                <input
                  type="text"
                  placeholder="Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md outline-none"
                />
                {errors.lastName && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            <div>
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

            <div>
              <input
                type="text"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
                className="w-full px-4 py-3 border border-[#E6E6E6] rounded-md outline-none"
              />
              {errors.address && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Message"
                rows={5}
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message should be at least 10 characters",
                  },
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
      </div>
    </section>
  );
};

export default ContactFormSection;
