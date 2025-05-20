"use client";

import Image from "next/image";
import Heading from "../Tags/Heading/Heading";
import {
  BlueLocation,
  BlueMail,
  BluePhone,
} from "../SvgContainer/SvgContainer";
import Paragraph from "../Tags/Paragraph/Paragraph";
import { RootState } from "../../redux/store";
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
          className=" rounded-[8px] w-full h-[236px]"
        />
        <div className="flex flex-col gap-y-2.5 pt-5 px-5">
          <Heading
            Variant={"h3"}
            Txt={name}
            className="text-primary-text-blue text-2xl font-bold"
          />
          <div className="flex flex-col gap-y-4 ">
            <div className="flex flex-row gap-x-2.5 ">
              <BluePhone />
              <Paragraph
                Txt={phone}
                className={"text-base  text-primary-text-blue  font-normal  "}
              />
            </div>
            <div className="flex flex-row gap-x-2.5 ">
              <BlueMail />
              <Paragraph
                Txt={email}
                className={"text-base  text-primary-text-blue  font-normal  "}
              />
            </div>
            <div className="flex flex-row gap-x-2.5 ">
              <BlueLocation />
              <Paragraph
                Txt={location}
                className={"text-base  text-primary-text-blue  font-normal  "}
              />
            </div>
          </div>
        </div>
      </div>
      <Dialog.Root open={isOpen !== null && isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed backdrop-blur-[2px] inset-0 bg-black/50 z-[999]" />
          <Dialog.Content className="fixed outline-none z-[999] top-1/2 left-1/2 w-full  -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg max-w-[903px] ">
            <div className="flex justify-between items-start py-10 pl-10  flex-col gap-y-10  pr-[60px] ">
              <div className="flex flex-row gap-x-10">
                <Image
                 data-aos="fade-up"
            data-aos-delay="100"
                  width={209}
                  height={209}
                  src={typeof bgImgurl === "string" ? bgImgurl : bgImgurl.src}
                  alt="team_img"
                  className="rounded-[8px] w-[209px] h-[209px] cursor-pointer "
                />
                <div className="flex flex-col gap-2.5">
                  <Heading
                    Variant="h4"
                    Txt={name}
                    className="text-[32px]  text-primary-text-blue  font-meidum "
                  />
                  <Paragraph
                    Txt={descreption}
                    className={"text-xl  text-primary-text-blue  font-normal  "}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-y-4 ">
                <div className="flex flex-row gap-x-2.5 ">
                  <BluePhone />
                  <Paragraph
                    Txt={phone}
                    className={
                      "text-base  text-primary-text-blue  font-normal  "
                    }
                  />
                </div>
                <div className="flex flex-row gap-x-2.5 ">
                  <BlueMail />
                  <Paragraph
                    Txt={email}
                    className={
                      "text-base  text-primary-text-blue  font-normal  "
                    }
                  />
                </div>
                <div className="flex flex-row gap-x-2.5 ">
                  <BlueLocation />
                  <Paragraph
                    Txt={location}
                    className={
                      "text-base  text-primary-text-blue  font-normal  "
                    }
                  />
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
