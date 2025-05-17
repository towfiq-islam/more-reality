"use client";
import Image from "next/image";
import Heading from "@/components/Tags/Heading/Heading";
import Paragraph from "@/components/Tags/Paragraph/Paragraph";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import {
  BluePhone,
  BlueMail,
  BlueLocation,
} from "../SvgContainer/SvgContainer";

type ImageObject = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
};

type teamDataSchema = {
  imgUrl: string | ImageObject;
  name: string;
  descreption: string;
  phone: string;
  mailAddres: string;
  address: string;
  id: number;
};

interface MeetProps {
  isAllmember: boolean;
}

const Meet: React.FC<MeetProps> = ({ isAllmember }) => {
  const teamData = useSelector((state: RootState) => state.team.teamData);
  const [isOpen, setIsOpen] = useState<boolean | null>(false);
  const [activeMember, setactiveMember] = useState<teamDataSchema | null>(null);

  return (
    <>
      <section className="py-20 container">
        {/* Title */}
        <Heading
          Txt="Meet the Team"
          className="text-primary-text-blue font-semibold text-5xl mb-4 text-center"
          Variant="h3"
        />
        {/* Sub Title */}
        <Paragraph
          Txt={"Our success starts with the people behind the name."}
          className="max-w-[1440px] text-primary-text-blue text-xl text-center mb-12"
        />

        {/* Map */}
        <div className="grid grid-cols-5 grid-col gap-x-6 gap-y-10">
          {(isAllmember ? teamData : teamData.slice(0, 5)).map(item => (
            <div
              key={item?.id}
              onClick={() => {
                setIsOpen(true);
                setactiveMember(item);
              }}
              className="text-center"
            >
              <Image
                width={271}
                height={271}
                src={
                  typeof item.imgUrl === "string"
                    ? item.imgUrl
                    : item.imgUrl.src
                }
                alt="Meet_img"
                className="rounded-full w-[271px] h-[271px] cursor-pointer"
              />
              <Heading
                Variant="h3"
                Txt={item?.name}
                className="text-primary-text-blue text-xl font-bold mt-5"
              />
            </div>
          ))}
        </div>
      </section>
      {activeMember !== null && (
        <Dialog.Root open={isOpen !== null && isOpen} onOpenChange={setIsOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 z-40" />
            <Dialog.Content className="fixed outline-none z-50 top-1/2 left-1/2 w-full  -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg max-w-[903px] ">
              <div className="flex justify-between items-start py-10 pl-10  flex-col gap-y-10  pr-[60px] ">
                <div className="flex flex-row gap-x-10">
                  <Image
                    width={209}
                    height={209}
                    src={
                      typeof activeMember.imgUrl === "string"
                        ? activeMember.imgUrl
                        : activeMember.imgUrl.src
                    }
                    alt="Meet_img"
                    className="rounded-full w-[209px] h-[209px] cursor-pointer "
                  />
                  <div className="flex flex-col gap-2.5">
                    <Heading
                      Variant="h4"
                      Txt={activeMember.name}
                      className="text-[32px]  text-primary-text-blue  font-meidum "
                    />
                    <Paragraph
                      Txt={ activeMember.descreption}
                      className={
                        "text-xl  text-primary-text-blue  font-normal  "
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-y-4 ">
                  <div className="flex flex-row gap-x-2.5 ">
                    <BluePhone />
                    <Paragraph
                      Txt={activeMember.phone}
                      className={
                        "text-base  text-primary-text-blue  font-normal  "
                      }
                    />
                  </div>
                  <div className="flex flex-row gap-x-2.5 ">
                    <BlueMail />
                    <Paragraph
                      Txt={activeMember.mailAddres}
                      className={
                        "text-base  text-primary-text-blue  font-normal  "
                      }
                    />
                  </div>
                  <div className="flex flex-row gap-x-2.5 ">
                    <BlueLocation />
                    <Paragraph
                      Txt={activeMember.address}
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
      )}
    </>
  );
};

export default Meet;
