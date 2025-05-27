"use client";
import contactUs from "@/assests/contact-img.png";
import { useForm } from "react-hook-form";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { useJoinUs } from "@/hooks/mutations";

interface ContactUsProps {
  title: string;
  description: string;
}

type FormData = {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  message: string;
};

const JoinUs: React.FC<ContactUsProps> = ({ title, description }) => {
  const { mutateAsync: joinUsMutation, isPending } = useJoinUs();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await joinUsMutation(data);
    reset();
  };

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-12 xl:py-24 mb-12 xl:mb-24 lg:px-5 3xl:px-0"
      style={{
        backgroundImage: `linear-gradient(#00000099, #00000099), url(${contactUs.src})`,
      }}
    >
      <div className="container flex flex-col xl:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="text-white flex-1 ">
          <Heading
            Txt={title}
            Variant="h3"
            className="text-white  !mb-3 text-center xl:text-start"
          />
          <Paragraph
            Txt={description}
            className="text-white text-center xl:text-start  opacity-80"
          />
        </div>

        {/* Right Side */}
        <div className="bg-white p-4 lg:p-8 rounded-xl shadow-2xl w-full flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 lg:space-y-4 w-full relative"
          >
            <div className="flex flex-col xl:flex-row gap-2 xl:gap-5">
              {/* First Name */}
              <div className="flex-1">
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="text"
                  placeholder="First Name"
                  {...register("first_name", {
                    required: "First name is required",
                  })}
                  className="w-full px-4 py-1.5 lg:py-3 border border-[#E6E6E6] rounded-[8px] outline-none"
                />
                {errors.first_name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.first_name.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div className="flex-1">
                <input
                  data-aos="fade-up"
                  data-aos-delay="100"
                  type="text"
                  placeholder="Last Name"
                  {...register("last_name", {
                    required: "Last name is required",
                  })}
                  className="w-full px-4 py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none"
                />
                {errors.last_name && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.last_name.message}
                  </p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
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
                className="w-full px-4  py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none"
              />
              {errors.email && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Address */}
            <div>
              <input
                data-aos="fade-up"
                data-aos-delay="100"
                type="text"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
                className="w-full px-4  py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none"
              />
              {errors.address && (
                <p className="text-sm text-red-600 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div>
              <textarea
                data-aos="fade-up"
                data-aos-delay="100"
                placeholder="Message"
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="w-full px-4  py-1.5 lg:py-3 border border-[#E6E6E6] rounded-md outline-none resize-none"
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
                disabled={isPending}
                type="submit"
                className="primary-btn !w-full disabled:!cursor-not-allowed"
              >
                {isPending ? "Submitting...." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
