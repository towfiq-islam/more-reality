"use client";
import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import {
  BlueLocation,
  BlueMail,
  BluePhone,
} from "../SvgContainer/SvgContainer";
import Paragraph from "../Tags/Paragraph/Paragraph";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

type ImageObject = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

interface OfficeCardProps {
  bgImgurl: string | ImageObject;
  name: string;
  location: string;
  phone: string;
  email: string;
  descreption: string;
}

const OfficeCard: React.FC<OfficeCardProps> = ({
  bgImgurl,
  name,
  phone,
  location,
  email,
  descreption,
}) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(false);

  return (
    <>
      <div
        onClick={() => {
          setIsOpen(true);
        }}
        className="flex flex-col max-w-[352px] relative h-auto  bg-white cursor-pointer shadow-office pb-5 rounded-[8px] "
      >
        <Image
          data-aos="fade-up"
          data-aos-delay="100"
          width={352}
          height={236}
          src={typeof bgImgurl === "string" ? bgImgurl : bgImgurl.src}
          alt="Meet_img"
          className="rounded-[8px] w-full h-[236px]"
        />
        <div className="flex flex-col gap-y-2.5 pt-3 3xl:pt-5 px-3 3xl:px-5">
          <Heading
            Variant={"h3"}
            Txt={name}
            className="text-primary-text-blue !text-xl 3xl:!text-2xl font-bold"
          />
          <div className="flex flex-col gap-y-4 ">
            <div className="flex flex-row gap-x-2.5 ">
              <div className="flex-shrink-0">
                <BluePhone />
              </div>
              <Paragraph
                Txt={phone}
                className={
                  "!text-base 3xl:!text-lg text-primary-text-blue font-normal"
                }
              />
            </div>
            <div className="flex flex-row gap-x-2.5 ">
              <div className="flex-shrink-0">
                <BlueMail />
              </div>
              <Paragraph
                Txt={email}
                className={
                  "!text-base 3xl:!text-lg text-primary-text-blue font-normal"
                }
              />
            </div>
            <div className="flex flex-row gap-x-2.5 ">
              <div className="flex-shrink-0">
                <BlueLocation />
              </div>
              <Paragraph
                Txt={location}
                className={
                  "!text-base 3xl:!text-lg text-primary-text-blue font-normal"
                }
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog.Root open={isOpen !== null && isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed backdrop-blur-[2px] inset-0 bg-black/50 z-[999]" />
          <Dialog.Content className="fixed outline-none z-[99999] top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg overflow-y-auto max-h-[550px] xl:max-h-[450px] w-11/12 xl:max-w-[903px] mx-auto">
            <div className="flex justify-between items-start p-5 md:p-7 xl:p-10 flex-col gap-y-5 md:gap-y-7 lg:gap-y-10">
              <div className="flex flex-col gap-y-5 lg:flex-row gap-x-5 xl:gap-x-10">
                <Image
                  width={209}
                  height={209}
                  src={typeof bgImgurl === "string" ? bgImgurl : bgImgurl.src}
                  alt="team_img"
                  className="rounded-[8px] mx-auto w-full md:w-[209px] h-[190px] md:h-[209px]"
                />
                <div className="flex flex-col gap-1 xl:gap-2.5">
                  <h3 className="text-xl md:!text-2xl 2xl:!text-[32px] font-semibold text-primary-text-blue">
                    {name}
                  </h3>
                  <p
                    className={
                      "!text-base md:!text-lg 2xl:!text-xl text-primary-text-blue font-normal"
                    }
                  >
                    {descreption}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 lg:gap-y-4 ">
                <div className="flex flex-row gap-x-2.5 ">
                  <BluePhone />
                  <p
                    className={"md:text-lg text-primary-text-blue font-medium"}
                  >
                    {phone}
                  </p>
                </div>
                <div className="flex flex-row gap-x-2.5 ">
                  <BlueMail />
                  <p
                    className={"md:text-lg text-primary-text-blue font-medium"}
                  >
                    {email}
                  </p>
                </div>
                <div className="flex flex-row gap-x-2.5 ">
                  <BlueLocation />
                  <p
                    className={"md:text-lg text-primary-text-blue font-medium"}
                  >
                    {location}
                  </p>
                </div>
              </div>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default OfficeCard;
